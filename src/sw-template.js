importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;
const { precacheAndRoute } = workbox.precaching;
const cacheFirstRoutes = [
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
  'https://img.icons8.com/color/48/000000/',
  'https://fonts.googleapis.com',
];

precacheAndRoute(self.__WB_MANIFEST);

cacheFirstRoutes.forEach((route) => {
  registerRoute(new RegExp(route), new CacheFirst());
});
