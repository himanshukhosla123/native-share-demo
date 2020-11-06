// firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

// firebase config
var firebaseConfig = {
   apiKey: "AIzaSyC0SZJkHFX-fQ7NrsxdI4l4mGwYuY4l7P8",
            projectId: "ambox-test",
            messagingSenderId: "1084158702155",
            appId: "1:1084158702155:web:848be33534a293ef4bd3ce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get Messaging Instance
const messaging = firebase.messaging();
