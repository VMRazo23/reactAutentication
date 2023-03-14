import { initializeApp } from "firebase/app";
import {initializeAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBkKU0R7ZVRaPbzmlzxJfY93z4Aj3U7ksA",
    authDomain: "proyecto-react-c231a.firebaseapp.com",
    projectId: "proyecto-react-c231a",
    storageBucket: "proyecto-react-c231a.appspot.com",
    messagingSenderId: "621073241018",
    appId: "1:621073241018:web:cf98886cc920c75f4c4383",
    measurementId: "G-Y1TRE97BPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);

export {auth};
