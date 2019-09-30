import firebaseConfig from '../FirebaseConfig';
import firebase from 'firebase';

firebase.initializeApp(
    firebaseConfig
);

export default firebase;
