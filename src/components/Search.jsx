import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	serverTimestamp,
	setDoc,
	updateDoc,
	where,
} from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../api/firebase.config';
import { UserAuth } from '../context/AuthContext';

const Search = () => {
	const [username, setUsername] = useState('');
	const [user, setUser] = useState(null);
	const [error, setError] = useState(false);

	const { currentUser } = UserAuth();

	const handleSelect = async () => {
		const combineId =
			currentUser.uid > user.uid
				? currentUser.uid + user.uid
				: user.uid + currentUser.uid;
		//check wheter the group (in firestore) exists, if not create
		try {
			const res = await getDoc(doc(db, 'chatColection', combineId));
			console.log('bloque try catch');
			console.log(res.exists());
			if (!res.exists()) {
				//create a chat in chatsCollection
				await setDoc(doc(db, 'chatColection', combineId), { messages: [] });
				//create userChats
				await updateDoc(doc(db, 'userChats', currentUser.uid), {
					[combineId + '.userInfo']: {
						uid: user.uid,
						displayName: user.displayName,
						photoURL: user.photoURL,
					},
					[combineId + '.date']: serverTimestamp(),
				});

				await updateDoc(doc(db, 'userChats', user.uid), {
					[combineId + '.userInfo']: {
						uid: currentUser.uid,
						displayName: currentUser.displayName,
						photoURL: currentUser.photoURL,
					},
					[combineId + '.date']: serverTimestamp(),
				});
			}
		} catch (error) {
			console.log(error);
		}

		setUser(null);
		setUsername('');
		//create user chats
	};

	const handleSearch = async () => {
		const q = query(collection(db, 'users'), where('displayName', '==', username));

		if (q.empty) {
			return;
		} else {
			try {
				const querySnapshot = await getDocs(q);
				querySnapshot.forEach((doc) => {
					setUser(doc.data());
				});
			} catch (error) {
				setError(true);
			}
		}
	};

	const handleKey = (e) => {
		e.code === 'Enter' && handleSearch();
	};

	return (
		<div className="search">
			<div className="searchForm">
				<input
					type="text"
					placeholder="Find a user"
					onKeyDown={handleKey}
					onChange={(e) => setUsername(e.target.value)}
					value={username}
				/>
			</div>
			{error && <span>Some Error</span>}
			{user && (
				<div className="userChat" onClick={handleSelect}>
					<img src={user.photoURL} alt="" />
					<div className="userChatInfo">
						<span>{user.displayName}</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Search;
