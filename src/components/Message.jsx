import React, { useEffect, useRef } from 'react';
import { UserAuth } from '../context/AuthContext';
import { ChatContextValue } from '../context/ChatContext';

const Message = ({ message }) => {
	const { currentUser } = UserAuth();
	const { data } = ChatContextValue();

	const ref = useRef();

	useEffect(() => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	}, [message]);

	return (
		<div className={`message ${message.senderId === currentUser.uid && 'owner'}`}>
			<div className="messageInfo">
				<img
					src={
						message.senderId === currentUser.uid
							? currentUser.photoURL
							: data.user.photoURL
					}
					alt="userimg"
				/>
				<span>Just now</span>
			</div>
			<div className="messageContent">
				<p>{message.text}</p>
				{message.img && <img src={message.img} alt="" />}
			</div>
		</div>
	);
};

export default Message;
