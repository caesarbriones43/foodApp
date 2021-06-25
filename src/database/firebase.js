import firebase from "firebase";

import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAoAfZmijDJoTR2_zsXZadOXY0K0eAZy0s",
  authDomain: "react-native-firebase-3264d.firebaseapp.com",
  databaseURL: "https://react-native-firebase-3264d.firebaseio.com",
  projectId: "react-native-firebase-3264d",
  storageBucket: "react-native-firebase-3264d.appspot.com",
  messagingSenderId: "25652533650",
  appId: "1:25652533650:web:a6227d68ac67df1c8fc94b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
