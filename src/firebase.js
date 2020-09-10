import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAS7Hj8CBkT1dcyZtNIlNOwmmCcKMGtNNE",
    authDomain: "clone-70534.firebaseapp.com",
    databaseURL: "https://clone-70534.firebaseio.com",
    projectId: "clone-70534",
    storageBucket: "clone-70534.appspot.com",
    messagingSenderId: "319903783248",
    appId: "1:319903783248:web:c7319a44b3ca35d86ff455"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };