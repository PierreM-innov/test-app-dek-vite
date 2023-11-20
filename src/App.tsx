import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestWakeLockComponent from "./components/TestWakeLockComponent.tsx";
import {useEffect} from "react";


function App() {

  useEffect(() => {
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('SW registered:', registration);
        } catch (error) {
          console.error('SW registration failed:', error);
        }
      }
    };

    function askPermission() {
      return new Promise(function (resolve, reject) {
        const permissionResult = Notification.requestPermission(function (result) {
          resolve(result);
        });

        if (permissionResult) {
          permissionResult.then(resolve, reject);
        }
      }).then(function (permissionResult) {
        if (permissionResult !== 'granted') {
          throw new Error("We weren't granted permission.");
        }
      });
    }

     askPermission()

    registerServiceWorker();
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
