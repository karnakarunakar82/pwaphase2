this.addEventListener('install',function(event){
event.waitUntil(
  caches.open('my chache')
  .then(function(e){
    e.addAll(
      [

    ]
  );

  })
);

});
//fetching
this.addEventListener('fetch', function(event) {
  event.respondWith(caches.open('my chache')
  .then(function(cache){
    return cache.match(event.request)
    .then(function(result){
      return result||fetch(event.request)
      .then(function(result){
        cache.put(event.request, result.clone());
        return result;
      });
    });
  })

  );
});
