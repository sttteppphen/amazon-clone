// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAfyCvIOi5XwLaQsyOsVhFdcLzvTj9AE78",
    authDomain: "clone-bef5c.firebaseapp.com",
    projectId: "clone-bef5c",
    storageBucket: "clone-bef5c.appspot.com",
    messagingSenderId: "317657071774",
    appId: "1:317657071774:web:4f2643befc08a29fab3b8f",
    measurementId: "G-CDYB9K1Z9D"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };