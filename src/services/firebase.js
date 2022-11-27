import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDostvoPuu3hYOBiKT-SYg33Nk3RSSVDZU",
    authDomain: "react-test-8c2c6.firebaseapp.com",
    projectId: "react-test-8c2c6",
    storageBucket: "react-test-8c2c6.appspot.com",
    messagingSenderId: "289478018764",
    appId: "1:289478018764:web:9831622990fbae86b72469",
    measurementId: "G-63TSWEJJ7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
