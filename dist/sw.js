const CACHE_NAME = 'nfm-medcare-cache-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network-First for main page, Stale-While-Revalidate for assets
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  if (e.request.mode === 'navigate' || url.pathname === '/' || url.pathname === '/index.html') {
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, response.clone());
            return response;
          });
        })
        .catch(() => {
          return caches.match(e.request);
        })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then((cachedResponse) => {
        const fetchPromise = fetch(e.request).then((networkResponse) => {
          if (networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(e.request, networkResponse.clone());
            });
          }
          return networkResponse;
        }).catch(() => {});
        
        return cachedResponse || fetchPromise;
      })
    );
  }
});
