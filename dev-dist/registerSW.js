if('serviceWorker' in navigator) navigator.serviceWorker.register('/dev-firebase-messaging-sw.js?dev-sw', { scope: '/', type: 'classic' })