import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../api/firebase.config';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			console.log(user);

			return () => unsub();
		});
	}, []);

	const logOut = () => {
		signOut(auth);
	};

	const signInWhitEmPass = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				setCurrentUser(user);
				console.log(currentUser);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};

	return (
		<>
			<AuthContext.Provider value={{ currentUser, logOut, signInWhitEmPass }}>
				{children}
			</AuthContext.Provider>
		</>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
