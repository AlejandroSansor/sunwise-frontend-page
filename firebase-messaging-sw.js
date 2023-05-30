// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
    // Project Settings => Add Firebase to your web app
    apiKey: 'AIzaSyAlQTz-c8vVyrMB2LWxr7SWiRcovx7hiI4',
    authDomain: 'sunwise-2019.firebaseapp.com',
    databaseURL: 'https://sunwise-2019.firebaseio.com',
    projectId: 'sunwise-2019',
    storageBucket: 'sunwise-2019.appspot.com',
    messagingSenderId: '660637394451',
    appId: '1:660637394451:web:2957fc961d80911a5941e6',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging.isSupported() ? firebase.messaging() : {};

messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
