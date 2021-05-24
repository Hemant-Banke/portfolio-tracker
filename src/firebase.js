import * as firebase from 'firebase';
import 'firebase/firestore';

// Firebase Setup
var firebaseConfig = {
    apiKey: "AIzaSyDk7Ycfd8L08LHdvGSRxDebHNt-ow5FHB4",
    authDomain: "timble-de0eb.firebaseapp.com",
    databaseURL: "https://timble-de0eb.firebaseio.com",
    projectId: "timble-de0eb",
    storageBucket: "timble-de0eb.appspot.com",
    messagingSenderId: "1000890463151",
    appId: "1:1000890463151:web:70c287c8adc02428f2b55a",
    measurementId: "G-DQZPEBLV9C"
};
firebase.initializeApp(firebaseConfig);

export default firebase;

export const db = firebase.firestore()

