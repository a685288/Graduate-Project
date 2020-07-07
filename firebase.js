import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3X54KKQ_f_QS9PwHdk3gO7N-aQfM6wSg",
    authDomain: "e-learning-4550b.firebaseapp.com",
    databaseURL: "https://e-learning-4550b.firebaseio.com",
    projectId: "e-learning-4550b",
    storageBucket: "e-learning-4550b.appspot.com",
    messagingSenderId: "458064779443",
    appId: "1:458064779443:web:4f2a9cb4881b54f01df8c6",
    measurementId: "G-HMC7V2W4V3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase