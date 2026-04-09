// StudyForge Service Worker v1.0
// Caches the entire app for full offline support

const CACHE_NAME = 'studyforge-v1';
const ASSETS_TO_CACHE = [
  '/StudyForge-GATE-DA-Tracker/',
  '/StudyForge-GATE-DA-Tracker/index.html',
  '/StudyForge-GATE-DA-Tracker/StudyForge_Tracker_V3.html',
  'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Fraunces:ital,wght@0,300;0,600;1,300&display=swap'
];

// ── INSTALL: cache all core assets ──────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[StudyForge SW] Caching app shell');
      // addAll fails if any single request fails, so we cache individually
      return Promise.allSettled(
        ASSETS_TO_CACHE.map(url =>
          cache.add(url).catch(err =>
            console.warn('[StudyForge SW] Failed to cache:', url, err)
          )
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: delete old caches ──────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[StudyForge SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: cache-first for app shell, network-first for everything else ───────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and chrome-extension requests
  if (request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;

  // For Google Fonts and app assets: cache-first
  if (
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com' ||
    url.pathname.includes('StudyForge')
  ) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          if (!response || response.status !== 200) return response;
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        });
      })
    );
    return;
  }

  // For everything else: network-first, fall back to cache
  event.respondWith(
    fetch(request)
      .then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        return response;
      })
      .catch(() => caches.match(request))
  );
});

// ── BACKGROUND SYNC: notify when back online ─────────────────────────────────
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
