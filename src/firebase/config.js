import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDn3_It1_XdTRaGR40Ac9PTklXjqEYIzwc",
  authDomain: "mymoney-e40c1.firebaseapp.com",
  projectId: "mymoney-e40c1",
  storageBucket: "mymoney-e40c1.appspot.com",
  messagingSenderId: "225460519823",
  appId: "1:225460519823:web:999464c0d628d8f53181fa",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
