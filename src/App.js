import React from "react";
import NotificationComponent from "./NotificationSericeWoker";
import {
  askForPermissionToReceiveNotifications,
  initializeFirebase,
} from "./push-notification-firebase";

const App = () => {
  // push notifaction with service worker  start her
  Notification.requestPermission(function (status) {
    console.log("Notification permission status:", status);
  });
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(function (reg) {
      reg.pushManager
        .subscribe({
          userVisibleOnly: true,
        })
        .then(function (sub) {
          console.log("Endpoint URL: ", sub.endpoint);
        })
        .catch(function (e) {
          if (Notification.permission === "denied") {
            console.warn("Permission for notifications was denied");
          } else {
            console.error("Unable to subscribe to push", e);
          }
        });
    });
  }
  // push notifaction with service worker ends her
  return (
    <div>
      <div>
        <h1> push notifaction using service worker </h1>
        <NotificationComponent />
      </div>
      <h1>push notifaction using firebase</h1>
      <button onClick={askForPermissionToReceiveNotifications}>
        Click to receive notifications (firebase) s
      </button>
      <h1> eg </h1>
      <h1> post request url : https://fcm.googleapis.com/fcm/send</h1>
      <h2>
        {" "}
        server key == Authorization :
        key=AAAAm4vN2sQ:APA91bElAp1n6mhOqEHJIuTH04s9lN4cMj-C9fjPwUK8V101bNOx-RmtmvI9njrrz9E7ovQknXXY6HamdCxkYqNdipnrKteZaVt7IB_ZNip-GWdTVKCvQ9isH62rGv4e3pIsJ3_P3h37{" "}
      </h2>
      <h1>
        {JSON.stringify({
          notification: {
            title: "harish kumar(Title)",
            body: "harish is willing to do mca in top college(Body)",
            icon: "https://i.imgur.com/5zO5cce.png",
          },
          to: "elSd6fdPkjvs5AOT3sOj7J:APA91bGf41WLkh_3l0sofKpv3md7lUiuWNhmSbKyUrHtuYREsY7F08-wixzK74oyHYx2q5LEHtG46jYEZbufnuQO-uz2lVzgVsxUHGhkimLTU3F64a905Bfa3UPoh94wMyzowKPhjmRS",
        })}
      </h1>
    </div>
  );
};

export default App;

initializeFirebase();
