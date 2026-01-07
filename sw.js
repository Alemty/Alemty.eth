
const CACHE_NAME = 'alemty-v1.2';
const ASSETS = ['/', '/index.html', '/css/style.css', '/js/app.js', '/assets/poap/placeholder.png', '/assets/og/banner.jpg', '/assets/og/avatar.png'];
self.addEventListener('install', (event)=>{ event.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS))); });
self.addEventListener('activate', (event)=>{ event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))); });
self.addEventListener('fetch', (event)=>{ event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request).then(r=>{ const copy = r.clone(); caches.open(CACHE_NAME).then(c=>c.put(event.request, copy)); return r; }).catch(()=>caches.match('/index.html')))); });
