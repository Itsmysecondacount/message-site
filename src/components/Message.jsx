import React from 'react';

const Message = () => {
	return (
		<div className="message owner">
			<div className="messageInfo">
				<img
					src="https://images.pexels.com/photos/15577045/pexels-photo-15577045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="userimg"
				/>
				<span>Just now</span>
			</div>
			<div className="messageContent">
				<p>hello</p>
				<img
					src="https://images.pexels.com/photos/15577045/pexels-photo-15577045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="something"
				/>
			</div>
		</div>
	);
};

export default Message;
