
const urlB64ToUint8Array = base64String => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
};

const saveSubscription = async subscription => {
    const SERVER_URL = "https://express-dk.vercel.app/save-subscription";
    const response = await fetch(SERVER_URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(subscription)
    });
    return response.json();
};
self.addEventListener('activate', async () => {
    // This will be called only once when the service worker is activated.
    try {
        console.log("activate service worker")
        const options = {}
        const subscription = await self.registration.pushManager.subscribe(options)
        console.log(JSON.stringify(subscription))
    } catch (err) {
        console.log('Error', err)
    }
})
self.addEventListener("install", async () => {
    // This will be called only once when the service worker is installed for first time.
    try {
        const applicationServerKey = urlB64ToUint8Array(
            "BI_-vdRg25ucEoPrL6f8yLgayiP5ACZ9f58zpsBQagF0i30VkDKGGHpS-BrLT7CdgKKFG3wfwlgVQrxUy0s-_4E"
        );
        const options = { applicationServerKey, userVisibleOnly: true };
        const subscription = await self.registration.pushManager.subscribe(options);
        console.log("here", subscription)
        const response = await saveSubscription(subscription);
        console.log(response);
    } catch (err) {
        console.log("Error", err);
    }
});

self.addEventListener("push", function(event) {
    if (event.data) {
        console.log("Push event!! ", event.data.text());
        showLocalNotification("Yolo", event.data.text(),  self.registration);
    } else {
        console.log("Push event but no data");
    }
});

const showLocalNotification = (title, body, swRegistration) => {
    const options = {
        body
        // here you can add more properties like icon, image, vibrate, etc.
    };
    swRegistration.showNotification(title, options);
};

