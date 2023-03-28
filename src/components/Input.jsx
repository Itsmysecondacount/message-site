import React, { useState } from 'react';
import { SlPaperClip } from 'react-icons/sl';
import { BsFileEarmarkImage } from 'react-icons/bs';
import { UserAuth } from '../context/AuthContext';
import { ChatContextValue } from '../context/ChatContext';
import {
	arrayUnion,
	doc,
	serverTimestamp,
	Timestamp,
	updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../api/firebase.config';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
const Input = () => {
	const [text, setText] = useState('');
	const [img, setImg] = useState(null);

	const { currentUser } = UserAuth();
	const { data } = ChatContextValue();

	const handleSend = async () => {
		if (img) {
			const storageRef = ref(storage, uuid());
			const uploadTask = uploadBytesResumable(storageRef, img);

			uploadTask.on(
				(error) => {},
				() => {
					// Handle successful uploads on complete
					// For instance, get the download URL: https://firebasestorage.googleapis.com/...
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						await updateDoc(doc(db, 'chatColection', data.chatId), {
							messages: arrayUnion({
								id: uuid(),
								text,
								senderId: currentUser.uid,
								date: Timestamp.now(),
								img: downloadURL,
							}),
						});
					});
				},
			);
		} else {
			await updateDoc(doc(db, 'chatColection', data.chatId), {
				messages: arrayUnion({
					id: uuid(),
					text,
					senderId: currentUser.uid,
					date: Timestamp.now(),
				}),
			});
		}

		await updateDoc(doc(db, 'userChats', currentUser.uid), {
			[data.chatId + '.lastMessage']: {
				text,
			},
			[data.chatId + '.date']: serverTimestamp(),
		});

		await updateDoc(doc(db, 'userChats', data.user.uid), {
			[data.chatId + '.lastMessage']: {
				text,
			},
			[data.chatId + '.date']: serverTimestamp(),
		});

		setText('');
		setImg(null);
	};

	return (
		<div className="input">
			<input
				type="text"
				placeholder="Type something ..."
				onChange={(e) => setText(e.target.value)}
				value={text}
			/>
			<div className="send">
				<input
					type="file"
					style={{ display: 'none' }}
					id="file"
					onChange={(e) => setImg(e.target.files[0])}
				/>
				<label htmlFor="file">
					<SlPaperClip className="iconsInput" size={'5em'} />
				</label>
				<BsFileEarmarkImage className="iconsInput" />
				<button onClick={handleSend}>Send</button>
			</div>
		</div>
	);
};

export default Input;
