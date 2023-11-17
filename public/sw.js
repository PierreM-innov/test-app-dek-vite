// public/sw.js

import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';
import { NavigationRoute, registerRoute } from 'workbox-routing';

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

let allowlist;
if (import.meta.env.DEV) {
    allowlist = [/^\/$/];
}

// to allow work offline
registerRoute(new NavigationRoute(
    createHandlerBoundToURL('index.html'),
    { allowlist },
));
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

    self.skipWaiting();
    clientsClaim();