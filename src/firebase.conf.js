import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DBURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJID,
  storageBucket: process.env.REACT_APP_FIREBASE_SBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASEMSGID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
