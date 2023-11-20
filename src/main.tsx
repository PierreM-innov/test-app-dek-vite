import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {getMessaging, getToken} from "firebase/messaging";
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
const firebaseApp = initializeApp(firebaseConfig);
    const messaging = getMessaging(firebaseApp);

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register(
            import.meta.env.MODE === 'production' ? '/sw.js' : '/dev-sw.js?dev-sw',
            { type: import.meta.env.MODE === 'production' ? 'classic' : 'module' }
        )
        .then((registration) => {
            getToken(messaging, {
                vapidKey: 'BCyo8NEIzJ8HGo_B9L1lG2_VMew4tuwgiaI2uhpMxPK3fUPd3AMXx6dnFENt0UT08HcNRW9y_pf97DnYO6wfAsY',
                serviceWorkerRegistration : registration
            })
                .then((currentToken) => {
                   console.log("current", currentToken)
                });
        });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

