import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDNRv9kDUE0xQef85wEMekCZ28JTRkWEdw",
	authDomain: "vue-live-chat-257b3.firebaseapp.com",
	projectId: "vue-live-chat-257b3",
	storageBucket: "vue-live-chat-257b3.appspot.com",
	messagingSenderId: "621123761528",
	appId: "1:621123761528:web:1176f1c800d77f2125048d",
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore();
const timestamp = firebase.timestamp.FieldValue.serverTimestamp;

export { projectFireStore, timestamp };
