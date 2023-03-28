import React from 'react';
import { AiFillVideoCamera, AiOutlineUserAdd } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import Input from './Input';
import Messages from './Messages';

const Chat = () => {
	return (
		<div className="chat">
			<div className="chatInfo">
				<span>Jane</span>
				<div className="chatIcons">
					<AiFillVideoCamera className="iconR" />
					<AiOutlineUserAdd className="iconR" />
					<FiMoreHorizontal className="iconR" />
				</div>
			</div>
			<Messages />
			<Input />
		</div>
	);
};

export default Chat;
