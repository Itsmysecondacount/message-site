import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
	const { logOut } = UserAuth();

	return (
		<div className="navbar">
			<span className="logo">Lama chat</span>
			<div className="user">
				<img
					src="https://images.pexels.com/photos/15577045/pexels-photo-15577045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="example"
				/>
				<span>Jhon</span>
				<button onClick={() => logOut()}>Logout</button>
			</div>
		</div>
	);
};

export default Navbar;
