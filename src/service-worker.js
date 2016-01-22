'use strict';

const PREFIX = 'devopera';
const HASH = ''; // Calculated when running `gulp`.
const OFFLINE_CACHE = `${PREFIX}-${HASH}`;
const OFFLINE_URL = '/errors/offline/index.html';

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(OFFLINE_CACHE).then(function(cache) {
			return cache.addAll([
				OFFLINE_URL,
				'/styles/screen.css',
				'/images/github.svg',
				'/images/logo.svg',
				'/scripts/highlight.js',
				'/scripts/salvattore.js'
			]);
		})
	);
});

self.addEventListener('activate', function(event) {
	// Delete old asset caches.
	event.waitUntil(
		caches.keys().then(function(keys) {
			return Promise.all(
				keys.map(function(key) {
					if (
						key != OFFLINE_CACHE &&
						key.startsWith(`${PREFIX}-`) &&
						!key.startsWith(`${PREFIX}-article-`)
					) {
						return caches.delete(key);
					}
				})
			);
		})
	);
});

self.addEventListener('fetch', function(event) {
	if (
		event.request.method == 'GET' &&
		event.request.headers.get('accept').includes('text/html')
	) {
		// It’s a GET request for an HTML document.
		// TODO: check `event.request.mode == 'navigate'` as soon as it’s supported.
		// Chromium bug: https://code.google.com/p/chromium/issues/detail?id=580526
		console.log('Handling fetch event for', event.request.url);
		console.log(event.request);
		event.respondWith(
			fetch(event.request).catch(function(exception) {
				// The `catch` is only triggered if `fetch()` throws an exception,
				// which most likely happens due to the server being unreachable.
				// FIXME: it’s also triggered for redirects (e.g. `/tv` → `/tv/`).
				console.error(
					'Fetch failed; returning offline page instead.',
					exception
				);
				return caches.open(OFFLINE_CACHE).then(function(cache) {
					return cache.match(OFFLINE_URL);
				});
			})
		);
	} else {
		// It’s not a request for an HTML document, but rather for a CSS or SVG
		// file or whatever…
		event.respondWith(
			caches.match(event.request).then(function(response) {
				return response || fetch(event.request);
			})
		);
	}

});
