import React from "react";

const NotificationComponent = (props) => {
  async function displayNotification() {
    if (Notification.permission === "granted") {
       const reg = await navigator.serviceWorker.getRegistration();
       reg.showNotification("Go go");
    }
  }
  return <button onClick={displayNotification}> Send notification </button>;
};

export default NotificationComponent;
