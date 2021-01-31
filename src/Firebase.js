import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyDRvc-BuhaN3FE3Uh4cgHN3QYBoKNt-cm0",
//     authDomain: "todo-4bcb8.firebaseapp.com",
//     projectId: "todo-4bcb8",
//     storageBucket: "todo-4bcb8.appspot.com",
//     messagingSenderId: "59772269965",
//     appId: "1:59772269965:web:d120e48eaf9b719186b9c4",
//     measurementId: "G-W533NP0RRR"
//   };

// eBmVFlHcjWwe9f6ERgOV
const firebaseapp=firebase.initializeApp({
    apiKey: "AIzaSyDRvc-BuhaN3FE3Uh4cgHN3QYBoKNt-cm0",
    authDomain: "todo-4bcb8.firebaseapp.com",
    projectId: "todo-4bcb8",
    storageBucket: "todo-4bcb8.appspot.com",
    messagingSenderId: "59772269965",
    appId: "1:59772269965:web:d120e48eaf9b719186b9c4",
    measurementId: "G-W533NP0RRR"


});


const db=firebaseapp.firestore();


export  default db;