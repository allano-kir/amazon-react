// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCQeCj0llMO46o3EkcLt17Wh8kwEA3xIA4",
    authDomain: "challenge-38f93.firebaseapp.com",
    projectId: "challenge-38f93",
    storageBucket: "challenge-38f93.appspot.com",
    messagingSenderId: "82357281631",
    appId: "1:82357281631:web:8313a603569aaa54c4ccea",
    measurementId: "G-ZFBDRHHEZF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db , auth };