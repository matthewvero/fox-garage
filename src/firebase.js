import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD33A9aXcx0uhBh49v8TzfFanSv0fDcWaw",
    authDomain: "foxgaragetest.firebaseapp.com",
    databaseURL: "https://foxgaragetest.firebaseio.com",
    projectId: "foxgaragetest",
    storageBucket: "foxgaragetest.appspot.com",
    messagingSenderId: "259369004199",
    appId: "1:259369004199:web:68f4c0e58fe8dd85a93f82",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
