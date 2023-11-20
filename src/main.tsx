import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import {getMessaging, getToken} from "firebase/messaging";
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
    // const messaging = getMessaging(firebaseApp);

function urlBase64ToUint8Array(base64String:string) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register(
            import.meta.env.MODE === 'production' ? '/sw.js' : '/dev-sw.js?dev-sw',
            { type: import.meta.env.MODE === 'production' ? 'classic' : 'module' }
        )
        .then(function (registration) {
            const subscribeOptions = {
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(
                    'BCyo8NEIzJ8HGo_B9L1lG2_VMew4tuwgiaI2uhpMxPK3fUPd3AMXx6dnFENt0UT08HcNRW9y_pf97DnYO6wfAsY',
                ),
            };

            return registration.pushManager.subscribe(subscribeOptions);
        })
        .then(function (pushSubscription) {
            console.log(
                'Received PushSubscription: ',
                JSON.stringify(pushSubscription),
            );
            return pushSubscription;
        });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

