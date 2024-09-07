import firebase from "firebase/app";
import  'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCmkOh1fF15ox6FBsUgcguo_4w4eXPfBmY",
    authDomain: "my-olx-f8ce7.firebaseapp.com",
    projectId: "my-olx-f8ce7",
    storageBucket: "my-olx-f8ce7.appspot.com",
    messagingSenderId: "860775161817",
    appId: "1:860775161817:web:5e7051ed459b8ca13cc3c8",
    measurementId: "G-H3EJ8150EB"
  };

   const Firebase=firebase.initializeApp(firebaseConfig);
   const firestore = firebase.firestore();
 export {Firebase,firestore};