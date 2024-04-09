// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

var productionHostname = 'dhime.in';
var firebaseConfig = {};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
if (window.location.hostname.toLowerCase().search(productionHostname) < 0) {
    firebaseConfig = {
        apiKey: "AIzaSyAjP-IPmHe9yRRxWaNY0xYILUxFIyv1w2w",
        authDomain: "dhime-b1789.firebaseapp.com",
        projectId: "dhime-b1789",
        storageBucket: "dhime-b1789.appspot.com",
        messagingSenderId: "693973128633",
        appId: "1:693973128633:web:3ce2fbdbe23c5d1961d268",
        measurementId: "G-72D2YSMWKX"
    };
} else {
    firebaseConfig = {
        apiKey: "AIzaSyD_Z3WNVY3-2JCRZpazo0eg4k9b01O7Khg",
        authDomain: "dhime-prod.firebaseapp.com",
        projectId: "dhime-prod",
        storageBucket: "dhime-prod.appspot.com",
        messagingSenderId: "277519572075",
        appId: "1:277519572075:web:f82f59fafdbac9356da52e",
        measurementId: "G-QFM25DFYS1"
    };
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);