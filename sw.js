var C='financas-v23';
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(['./','index.html','manifest.webmanifest','icon.png']);}));self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C;}).map(function(x){return caches.delete(x);}));}));self.clients.claim();});
self.addEventListener('fetch',function(e){var u=e.request.url;if(e.request.method!=='GET'||/googleapis\.com/.test(u))return;e.respondWith(fetch(e.request).then(function(r){if(r&&r.ok&&/gstatic\.com\/firebasejs\//.test(u)){var cp=r.clone();caches.open(C).then(function(c){c.put(e.request,cp);});}return r;}).catch(function(){return caches.match(e.request);}));});
