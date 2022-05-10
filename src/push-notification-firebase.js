import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuBT4XVI2eY887Mh8sWenSsU1aPSLK4BQ",
  authDomain: "userapp-16746.firebaseapp.com",
  projectId: "userapp-16746",
  storageBucket: "userapp-16746.appspot.com",
  messagingSenderId: "668065454788",
  appId: "1:668065454788:web:e9a2aaf2368fb236ff4791",
  measurementId: "G-3YZ3ZMC1TQ",
};
export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyAuBT4XVI2eY887Mh8sWenSsU1aPSLK4BQ",
    authDomain: "userapp-16746.firebaseapp.com",
    projectId: "userapp-16746",
    storageBucket: "userapp-16746.appspot.com",
    messagingSenderId: "668065454788",
    appId: "1:668065454788:web:e9a2aaf2368fb236ff4791",
    measurementId: "G-3YZ3ZMC1TQ",
  });
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("Your token is:", token);

    return token;
  } catch (error) {
    console.error(error);
  }
};
