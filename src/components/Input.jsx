import React from 'react';
import { SlPaperClip } from 'react-icons/sl';
import { BsFileEarmarkImage } from 'react-icons/bs';
const Input = () => {
	return (
		<div className="input">
			<input type="text" placeholder="Type something ..." />
			<div className="send">
				<SlPaperClip className="iconsInput" />
				<BsFileEarmarkImage className="iconsInput" />
				<button>Send</button>
			</div>
		</div>
	);
};

export default Input;
