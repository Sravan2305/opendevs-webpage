// /* eslint-disable no-unused-vars */
// import firebase from "firebase/app"
// import FIREBASE from "firebase"

// const FIREBASE_CONFIG = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
//   measurementId: process.env.measurementId
// }
// firebase.initializeApp(FIREBASE_CONFIG)
// const db = FIREBASE.firestore()

// export default function pushNotification() {
//   serviceWorker()
// }

// const serviceWorker = () => {
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker
//       .register("./sw.js")
//       .then(() => {
//         console.log("[Service Worker] Registration : Successful")
//       })
//       .catch(err => {
//         console.log("[Service Worker] Registration : Failed", err)
//       })
//   }
//   if ("Notification" in window) {
//     Notification.requestPermission(result => {
//       if (result === "granted") {
//         configurePushSubscription()
//       }
//     })
//   }
// }

// const configurePushSubscription = () => {
//   if (!("serviceWorker" in navigator)) {
//     return
//   }

//   let sw
//   navigator.serviceWorker.ready
//     .then(currentRegisteredSW => {
//       sw = currentRegisteredSW
//       return sw.pushManager.getSubscription()
//     })
//     .then(currentSubscription => {
//       if (currentSubscription === null) {
//         const VAPID_PUBLIC =
//           "BIAZwmMudXY985BJKrg-UYrc98W8meJM0yF23a3FA-zO65P5n0bo-d2GGJQkjjMrOyhv_8epYWqB1u2iqXiNXus"
//         const convertedVapidKey = urlBase64ToUint8Array(VAPID_PUBLIC)

//         return sw.pushManager.subscribe({
//           userVisibleOnly: true,
//           applicationServerKey: convertedVapidKey
//         })
//       } else {
//         // already there
//       }
//     })
//     .then(newSubscription => {
//       return db
//         .collection("subscriptions")
//         .add(JSON.parse(JSON.stringify(newSubscription)))
//     })
//     .then(resposneFromFirebase => {
//       console.log(resposneFromFirebase)
//       if (resposneFromFirebase) {
//         confirmationNotification()
//       }
//     })
//     .catch(err => {
//       console.log(err)
//       console.log("An error occured")
//     })
// }

// const confirmationNotification = () => {
//   if (!("serviceWorker" in navigator)) {
//     return
//   }
//   navigator.serviceWorker.ready.then(activeSW => {
//     const NotificationOptions = {
//       body: "We will notify with our new blog posts"
//     }
//     activeSW.showNotification(
//       "Thanks for enabling notifications!",
//       NotificationOptions
//     )
//   })
// }

// function urlBase64ToUint8Array(base64String) {
//   const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
//   const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/")

//   const rawData = window.atob(base64)
//   const outputArray = new Uint8Array(rawData.length)

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i)
//   }
//   return outputArray
// }
