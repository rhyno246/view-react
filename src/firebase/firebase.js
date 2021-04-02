import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore';
import 'firebase/storage';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCmZRQcegXH7i1rtjy-pxgSV3kvMxusCtY",
    authDomain: "auth-re-ech-app.firebaseapp.com",
    projectId: "auth-re-ech-app",
    messagingSenderId: "461094887941",
    appId: "1:461094887941:web:33084349d6c0d6c1d8b26c",
    measurementId: "G-FP4B13H22B",
    storageBucket : 'gs://auth-re-ech-app.appspot.com'
})
export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();
export default app
