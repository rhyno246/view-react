import firebase from 'firebase/app'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyCmZRQcegXH7i1rtjy-pxgSV3kvMxusCtY",
    authDomain: "auth-re-ech-app.firebaseapp.com",
    projectId: "auth-re-ech-app",
    storageBucket: "auth-re-ech-app.appspot.com",
    messagingSenderId: "461094887941",
    appId: "1:461094887941:web:33084349d6c0d6c1d8b26c",
    measurementId: "G-FP4B13H22B"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire