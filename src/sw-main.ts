import { clientsClaim } from 'workbox-core';
import { registerRoute } from 'workbox-routing';
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { Eta } from 'eta';

declare let self: ServiceWorkerGlobalScope;

cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', (event) => {
  console.log(`Service Worker Installed`, {event});
});

self.addEventListener('activate', (event) => {
  console.log(`Service Worker Activated`, {event});
});

const eta = new Eta();

let count = 1;

registerRoute('/counter', async () => {
  console.log('Counter route hit');
  const request = await fetch('/templates/counter.html');
  const templateStr = await request.text();
  const html = eta.renderString(templateStr, { count: count++ });
  console.log('Counter route response', { html, templateStr, request, count });

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' }
  });
});

self.skipWaiting();
clientsClaim()

export default null;