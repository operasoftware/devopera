'use strict';

const OFFLINE_CACHE = '';
const OFFLINE_URL = '/errors/offline.html';

importScripts('/scripts/sw-cache-polyfill.js');

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(OFFLINE_CACHE).then(function(cache) {
			return cache.addAll([
				OFFLINE_URL,
				'/styles/screen.css',
				'/images/github.svg',
				'/images/logo.png',
				'/images/logo@2x.png',
				'/scripts/highlight.js',
				'/scripts/salvattore.js'
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	if (
		event.request.method == 'GET' &&
		event.request.headers.get('accept').includes('text/html')
	) {
		// It’s a GET request for an HTML document.
		//console.log('Handling fetch event for', event.request.url);
		event.respondWith(
			fetch(event.request).catch(function(exception) {
				// The `catch` is only triggered if `fetch()` throws an exception,
				// which most likely happens due to the server being unreachable.
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
		event.respondWith(
			caches.match(event.request).then(function(response) {
				return response || fetch(event.request);
			})
		);
	}

});
