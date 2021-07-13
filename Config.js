import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyBgmAjn6XDOVsH1Qo9P3uOpU4d38jJse4E",
    authDomain: "svcapp-fd9ef.firebaseapp.com",
    projectId: "svcapp-fd9ef",
    storageBucket: "svcapp-fd9ef.appspot.com",
    messagingSenderId: "463749967659",
    appId: "1:463749967659:web:42d387a0b6081be0379f6e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();