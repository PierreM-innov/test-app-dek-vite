import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {initializeApp} from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBI8PQhRA10G_WGchbvdr5kOsKcZmZ5CRs",
    authDomain: "test-dk-app.firebaseapp.com",
    projectId: "test-dk-app",
    storageBucket: "test-dk-app.appspot.com",
    messagingSenderId: "576794172305",
    appId: "1:576794172305:web:2562931c0826439a3f5830",
    measurementId: "G-JVJLMR4EZS"
};
initializeApp(firebaseConfig);

// function urlBase64ToUint8Array(base64String:string) {
//     var padding = '='.repeat((4 - base64String.length % 4) % 4);
//     var base64 = (base64String + padding)
//         .replace(/\-/g, '+')
//         .replace(/_/g, '/');
//
//     var rawData = window.atob(base64);
//     var outputArray = new Uint8Array(rawData.length);
//
//     for (var i = 0; i < rawData.length; ++i) {
//         outputArray[i] = rawData.charCodeAt(i);
//     }
//     return outputArray;
// }


if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
            console.log('SW registered:', registration);
        }).catch((registrationError) => {
            console.log('SW registration failed:', registrationError);
        });
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

