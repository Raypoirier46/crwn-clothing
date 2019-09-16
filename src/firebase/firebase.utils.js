import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyA7trLVshRX3wkHBltvZgOD0oC8OAxB1P0",
        authDomain: "crwn-db-141d7.firebaseapp.com",
        databaseURL: "https://crwn-db-141d7.firebaseio.com",
        projectId: "crwn-db-141d7",
        storageBucket: "",
        messagingSenderId: "1027798339659",
        appId: "1:1027798339659:web:e21f344dee016745b3fdce"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;