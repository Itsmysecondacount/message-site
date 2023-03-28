import { collection, query, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../api/firebase.config';

const Search = () => {
	const [username, setUsername] = useState('');
	const [user, setUser] = useState(null);
	const [error, setError] = useState(false);

	const handleSearch = async () => {
		const q = query(collection(db, 'users'), where('displayName', '==', username));
		if (q.empty) {
			return;
		} else {
			setUser(q);
			console.log(q);
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
			{!!user && (
				<div className="userChat">
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
