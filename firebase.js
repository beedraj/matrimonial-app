// Import the functions you need from the SDKs you need
import *  as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTLaiYd2mi9a_G1yns7NCHFpCiB71ZoJs",
  authDomain: "fir-login-8f836.firebaseapp.com",
  projectId: "fir-login-8f836",
  storageBucket: "fir-login-8f836.appspot.com",
  messagingSenderId: "170956494345",
  appId: "1:170956494345:web:8adeeea50ff7d487608ad8",
  measurementId: "G-1DK87Y8FEY"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
  app = firebase.intializeApp(firebaseConfig);
}else{
  app= firebase.app()
}
const auth = firebase.auth()
export {auth};