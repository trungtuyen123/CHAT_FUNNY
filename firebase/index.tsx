import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCBMLPsonVDsOmcP9acokyjkTyQLaTqliI",
  authDomain: "chat-funny-d36ee.firebaseapp.com",
  projectId: "chat-funny-d36ee",
  storageBucket: "chat-funny-d36ee.appspot.com",
  messagingSenderId: "239536145801",
  appId: "1:239536145801:web:e75f28e87d1fb96796cd58"
};

// Initialize Firebase
let app
if(firebase.apps.length === 0) {
 app = firebase.initializeApp(firebaseConfig);

} else {
app =firebase.app()
}

const auth = firebase.auth()

export {auth}