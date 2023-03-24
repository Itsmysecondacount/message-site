import React from 'react';
import { AiFillFolderAdd } from 'react-icons/ai';

const Register = () => {
	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">Lama Chat</span>
				<span className="title">Register</span>
				<form action="">
					<input type="text" placeholder="display name" />
					<input type="email" placeholder="email" />
					<input type="password" placeholder="password" />
					<input style={{ display: 'none' }} type="file" id="file" />
					<label htmlFor="file">
						<AiFillFolderAdd className="imgAdd" />
						<span>Add an avatar</span>
					</label>
					<button>Sign up</button>
				</form>
				<p>You do have acount? Login</p>
			</div>
		</div>
	);
};

export default Register;
