import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

const firebaseBucket = initializeApp(firebaseConfig);
const bucket = getStorage(firebaseBucket)

const firebaseRTDB = initializeApp(firebaseConfig);
const rtdb = getDatabase(firebaseRTDB)

const firebaseAuth = initializeApp(firebaseConfig);
const auth = getAuth(firebaseAuth)

const firebaseFirestore = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseFirestore)

export  {
  rtdb,
  auth,
  bucket,
  firestore
}
