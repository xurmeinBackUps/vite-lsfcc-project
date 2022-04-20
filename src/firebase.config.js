import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: import.meta.env.FB_API_KEY,
	authDomain: import.meta.env.FB_AUTH_DOMAIN,
	databaseUrl: import.meta.env.FB_DB_URL,
	projectId: import.meta.env.FB_PROJECT_ID,
	storageBucket: import.meta.env.FB_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.FB_MSG_SENDER_ID,
	appId: import.meta.env.FB_APP_ID,
	measurementId: import.meta.env.FB_MEASUREMENT_ID
};

export const firebase = initializeApp(firebaseConfig)
