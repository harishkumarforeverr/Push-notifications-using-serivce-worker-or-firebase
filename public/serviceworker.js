// const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

// const self = this;

// // Install SW
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("Opened cache");

//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// // Listen for requests
// self.addEventListener("fetch", (event) => {
// event.respondWith(
//   caches.match(event.request).then(() => {
//     return fetch(event.request).catch(() => caches.match("offline.html"));
//   })
// );
//   console.log("serverworker fetch");
// });

// // Activate the SW
// self.addEventListener("activate", (event) => {
//   const cacheWhitelist = [];
//   cacheWhitelist.push(CACHE_NAME);

//   event.waitUntil(
//     caches.keys().then((cacheNames) =>
//       Promise.all(
//         cacheNames.map((cacheName) => {
//           if (!cacheWhitelist.includes(cacheName)) {
//             return caches.delete(cacheName);
//           }
//         })
//       )
//     )
//   );
// });
// //  setInterval(() => {
// // console.log("serverworker fetch")
// // caches.keys().then(function (names) {
// //   for (let name of names) caches.delete(name);
// // }
// // // }, 100);

// var cacheName = "cache-update-and-refresh";
// var cacheFiles = [
//   "./",
//   "index.html",
//   "offline.html",
//   // list all the assests you want to list
// ];
// const self = this;
// var refreshing;
// self.addEventListener("controllerchange", function () {
//   if (refreshing) return;
//   refreshing = true;
//   window.location.reload();
// });

// self.addEventListener("install", function (e) {
//   // console.log("[serviceWorker] installed");
//   // e.waitUntil(
//   //   caches
//   //     .open(cacheName)
//   //     .then(function (cache) {
//   //       return cache.addAll(cacheFiles);
//   //     })
//   //     .then(function () {
//   //       return self.skipWaiting();
//   //     })
//   // );
//   // console.log("[serviceWorker] Cached");
// });
// Activate the SW
// self.addEventListener("activate", (event) => {
//   const cacheWhitelist = [];
//   cacheWhitelist.push(cacheName);

//   event.waitUntil(
//     caches.keys().then((cacheNames) =>
//       Promise.all(
//         cacheNames.map((cacheName) => {
//           if (!cacheWhitelist.includes(cacheName)) {
//             return caches.delete(cacheName);
//           }
//         })
//       )
//     )
//   );
// });
// self.addEventListener("activate", (event) => {
//   console.info("Event: Activate");
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cache) => {
//           if (cache !== cacheName) {
//             //cacheName = 'cache-v1'
//             return caches.delete(cache); //Deleting the cache
//           }
//         })
//       );
//     })
//   );
// });

// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       return (
//         response ||
//         fetch(event.request).catch(() => caches.match("offline.html"))
//       );
//     })
//   );
//   event.waitUntil(
//     update(event.request).then(function (response) {
//       caches.open(cacheName).then(function (cache) {
//         caches.match(event.request).then(function (cacheresponse) {
//           if (
//             cacheresponse.headers.get("ETag") !== response.headers.get("ETag")
//           ) {
//             console.log(
//               "[ServiceWorker]" +
//                 response.url +
//                 " - Cache" +
//                 cacheresponse.headers.get("ETag") +
//                 "- real" +
//                 response.headers.get("ETag")
//             );
//             cache.put(event.request, response.clone()).then(function () {
//               refresh(event.request, response);
//             });
//           }
//         });
//       });
//     })
//   );
// });

// function fromCache(request) {
//   return caches.open(cacheName).then(function (cache) {
//     return cache.match(request);
//   });
// }

// function update(request) {
//   return caches.open(cacheName).then(function (cache) {
//     return fetch(request).then(function (response) {
//       return response;
//     });
//   });
// }

// function refresh(req, response) {
//   return self.clients.matchAll().then(function (clients) {
//     clients.forEach(function (client) {
//       var message = {
//         type: "refresh",
//         url: response,
//         eTag: response.headers.get("ETag"),
//       };
//       client.postMessage(JSON.stringify(message));
//     });
//   });
// }
