import firebase from "firebase/compat/app";
import {getMessaging} from "firebase/messaging";

importScripts('https://www.gstatic.com/firebasejs/9.6.2/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.6.2/firebase-messaging-compat.js')

const firebaseConfig = {
    apiKey: "AIzaSyBI8PQhRA10G_WGchbvdr5kOsKcZmZ5CRs",
    authDomain: "test-dk-app.firebaseapp.com",
    projectId: "test-dk-app",
    storageBucket: "test-dk-app.appspot.com",
    messagingSenderId: "576794172305",
    appId: "1:576794172305:web:2562931c0826439a3f5830",
    measurementId: "G-JVJLMR4EZS"
}

const app = firebase.initializeApp(firebaseConfig)

const messaging = getMessaging(app)

messaging.onBackgroundMessage((payload)=>{
    console.log('received background message', payload)
    const notificationOptions = {
        body : payload.notification.body,
        icon : payload.notification.icon
    }

    self.registrattion.showNotification(payload.notification.title, notificationOptions)
})