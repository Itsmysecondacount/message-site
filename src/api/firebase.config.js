// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBEg4J8PX76FXkjBSvCz0VIKUMC45mfzdI',
	authDomain: 'message-app-learn-firebase.firebaseapp.com',
	projectId: 'message-app-learn-firebase',
	storageBucket: 'message-app-learn-firebase.appspot.com',
	messagingSenderId: '425651288188',
	appId: '1:425651288188:web:7352e3a1b0e7d111fb31f9',
	measurementId: 'G-Q6N799S95W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth();
