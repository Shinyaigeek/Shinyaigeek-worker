addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  caches.match(request).then(function (response) {
    return response || fetch(request);
  });
}
