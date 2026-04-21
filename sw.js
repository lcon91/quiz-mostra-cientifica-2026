const CACHE_NAME = 'mc2026-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './assets/css/styles.css',
    './assets/js/script.js',
    './assets/js/data.js',
    './assets/imgs/contemporaneo-logo.jpg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
