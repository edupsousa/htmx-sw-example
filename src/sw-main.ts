import { clientsClaim } from 'workbox-core';
import { registerRoute } from 'workbox-routing';

declare let self: ServiceWorkerGlobalScope;

self.addEventListener('install', (event) => {
  console.log(`Service Worker Installed`, {event});
});

self.addEventListener('activate', (event) => {
  console.log(`Service Worker Activated`, {event});
});

let counter = 1;

registerRoute('/counter', async () => {
  return new Response(`Counter is ${counter++}`, {
    headers: { 'Content-Type': 'text/html' }
  });
});

self.skipWaiting();
clientsClaim()

export default null;