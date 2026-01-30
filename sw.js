const CACHE_NAME = 'gachite-cache-v1';
const assets = ['./', './index.html', 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
