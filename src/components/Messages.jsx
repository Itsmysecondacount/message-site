import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../api/firebase.config';
import { ChatContextValue } from '../context/ChatContext';
import Message from './Message';

const Messages = () => {
	const [messages, setMessages] = useState([]);
	const { data } = ChatContextValue();

	useEffect(() => {
		const unSub = onSnapshot(doc(db, 'chatColection', data.chatId), (doc) => {
			doc.exists() && setMessages(doc.data().messages);
			console.log('!!!!!!!!!!');
			console.log(doc.data());
		});

		return () => {
			unSub();
		};
	}, [data.chatId]);

	return (
		<div className="messages">
			{messages?.map((m) => (
				<Message message={m} key={m.id} />
			))}
		</div>
	);
};

export default Messages;
