import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDYVGOcvvspVNNtRRc9idhQO5qcSljMvv8",
    authDomain: "ghostyhunt-64c4d.firebaseapp.com",
    projectId: "ghostyhunt-64c4d",
    storageBucket: "ghostyhunt-64c4d.appspot.com",
    messagingSenderId: "239068689413",
    appId: "1:239068689413:web:59686b95fc352a45af986c",
    measurementId: "G-SQZG8TPR03"
};

export const appDb = firebase.initializeApp(firebaseConfig);