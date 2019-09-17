import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA4dGouVSsGhitlNUW54OU101xYn6_nCWQ",
  authDomain: "net-ninja-marioplan-30bc0.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-30bc0.firebaseio.com",
  projectId: "net-ninja-marioplan-30bc0",
  storageBucket: "",
  messagingSenderId: "311624811126",
  appId: "1:311624811126:web:bc897bd9d442fdce205557"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebase;