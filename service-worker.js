const CACHE_NAME = "temple-card-cache-v1";
const urlsToCache = [
  "/",
  "/card-generator/",
  "/card-generator/index.html",
  "/card-generator/logo.png",
  "/card-generator/bg.jpg",
  "/card-generator/manifest.webmanifest",
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
