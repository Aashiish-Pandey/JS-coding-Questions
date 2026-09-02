const CACHE_NAME = "demo/v3";

const CACHE_FILES = [
        "./index.html",
        "./bird.png",
        "./script.js",
        "./style.css",
      ]

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(CACHE_FILES);
    }),
  );
});

self.addEventListener("activate", (e) => {

    // clean up useless cache
    e.waitUntil(
        caches.keys().then(keyList=>{
            return Promise.all(keyList.map(key=>{
                if(key!==CACHE_NAME) {
                    return caches.delete(key)
                }
            }))
        })
)
});

self.addEventListener("fetch", (e) => {
  //offline experience
  // Whenever a file is requested ,
  // 1 fetch from network , update my cache
  //use cache as fallback

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        //update my cache
        const cloneData = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, cloneData);
        });
        return res
      })
      .catch(()=>{
        return caches.match(e.request).then(file=>file)
      })
  );
});
