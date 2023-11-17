
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestWakeLockComponent from "./components/TestWakeLockComponent.tsx";
import {useEffect, useState} from "react";
import firebase from "firebase/compat/app";
import {} from 'firebase/messaging'
import {getMessaging, getToken, onMessage} from "firebase/messaging";


function App() {

    const [, setMessaging] = useState<any>(null)

    useEffect(() => {
        if (!('serviceWorker' in navigator)) {
            throw new Error('No Service Worker support!')
        }
        if (!('PushManager' in window)) {
            throw new Error('No Push API Support!')
        }
        const initialiseFirebaseMessaging = async ()=>{
            const firebaseConf ={
                apiKey: "AIzaSyBI8PQhRA10G_WGchbvdr5kOsKcZmZ5CRs",
                authDomain: "test-dk-app.firebaseapp.com",
                projectId: "test-dk-app",
                storageBucket: "test-dk-app.appspot.com",
                messagingSenderId: "576794172305",
                appId: "1:576794172305:web:2562931c0826439a3f5830",
                measurementId: "G-JVJLMR4EZS"
            }

            const app = firebase.initializeApp(firebaseConf);

            const messagingInstance= getMessaging(app)
            setMessaging(messagingInstance)

            try {
                const result = await Notification.requestPermission()
                if (result === 'denied') {
                    console.error('The user explicitly denied the permission request.');
                    return;
                }
                if (result === 'granted') {
                    console.info('The user accepted the permission request.');
                }

                const token = getToken(messagingInstance)
                console.log("toke", token)

                onMessage(messagingInstance, (payload)=>{
                    console.log("Message received", payload)
                })
            } catch (error) {
                console.error(error);
            }
        }

        initialiseFirebaseMessaging()
    }, []);


    return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <TestWakeLockComponent/>
    </>
  )
}

export default App
