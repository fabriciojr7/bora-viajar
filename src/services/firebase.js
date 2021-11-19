import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import env from 'react-dotenv'

const firebaseConfig = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGING_SENDER_ID,
  appId: env.APP_ID,
  measurementId: env.MEASUREMENT_ID
};



const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
