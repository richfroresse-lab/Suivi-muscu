const NOM = 'suivi-muscu-v1';
const FICHIERS = ['./', './index.html', './manifest.json'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(NOM).then(c => c.addAll(FICHIERS)));
  self.skipWaiting();
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
