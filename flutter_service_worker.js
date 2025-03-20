'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f97523e2fc1f3dae86c30283768b9aed",
"assets/AssetManifest.bin.json": "c05aad12f49b033e5c76bf00b050f01b",
"assets/AssetManifest.json": "a64ff2675ad81028705160a362537071",
"assets/assets/gifs/cancel.gif": "7e0b6d6fab2406dbe70a6afa4da5d73f",
"assets/assets/gifs/geofencing_in_progress.gif": "deb4812361a0f5c359a7a8cd8bfeea15",
"assets/assets/gifs/location_not_found_gif.gif": "c4954ac067e124308a3663b76a2e4fc6",
"assets/assets/gifs/success.gif": "579266447b78b547d5f4c621b118e985",
"assets/assets/icons/bell_icon.svg": "3d95528d12d2918d7f761381416f465a",
"assets/assets/icons/calendar_icon.svg": "f535a6dc8e137b6dc6468f2fc37d6eb6",
"assets/assets/icons/camera_icon.svg": "fa6e01422defde26bff6ed97abe89197",
"assets/assets/icons/error401_icon.svg": "310ff59fa218875586e1677809920812",
"assets/assets/icons/error500_icon.svg": "b74d14127cb3fd443c8226de124c1804",
"assets/assets/icons/error_screen_graphic.svg": "e848d7e7946dc0a706458fb2041d8cb4",
"assets/assets/icons/flip_camera_icon.svg": "7a3685337b8a0061002419afd3d9b16d",
"assets/assets/icons/globe_icon.svg": "af2fb1987ca4706d897a8d6a5862751a",
"assets/assets/icons/green_tick_circle.svg": "c9bbacd263d53849a9ef2e0c11cabc4a",
"assets/assets/icons/grid_view_icon.svg": "5229d9c927c01d911238bd3023f0d507",
"assets/assets/icons/guided_inspection_icon.svg": "1290bccbfc20a723dee23ce3dce07c25",
"assets/assets/icons/help_icon.svg": "be2ffb2d84e0e2e2da6c2c83305a222d",
"assets/assets/icons/hollow_circle.svg": "95233a54152f6a50e46adf2fd83aa064",
"assets/assets/icons/hollow_circle_thick.svg": "5ab3100264269a81a3e68619ef416e70",
"assets/assets/icons/house_icon.svg": "37fede839d7709ed4038ec55bde61c7e",
"assets/assets/icons/image_synced_icon.svg": "35985e80d732b3d115a432c0d46503d8",
"assets/assets/icons/image_syncing_icon.svg": "ed408690f29d2bcd3dfe957b436ae8b1",
"assets/assets/icons/lets_get_started_view_graphic.svg": "86e0d4f6cdda0cf3cd3a7628332d2b38",
"assets/assets/icons/list_view_icon.svg": "698fd2ad7cb398c25d6fd00eeecc0abc",
"assets/assets/icons/maroon_circle.svg": "7f4b406ecdb24dc971d3e42166a11549",
"assets/assets/icons/orbit_circular_icon.svg": "e4670c373c6cbb562400dd0d486c12e8",
"assets/assets/icons/orbit_icon.svg": "df727e465e43d4d66971e0777665ba57",
"assets/assets/icons/orbit_icon_black.svg": "a6d9833a13750bd2099a38bbf9ee4b35",
"assets/assets/icons/profile_icon.svg": "f94c1f35a2faa290d8950900e610faa4",
"assets/assets/icons/red_cross_circle.svg": "1851ab15a951e3b66412924fda6e6d64",
"assets/assets/icons/self_inspection_icon.svg": "73a2677ac0a1e6c9c3b32b6e23aaf9eb",
"assets/assets/icons/tick_circle.svg": "ab4f6ef08d5d03c3d810914b69a9ee04",
"assets/assets/icons/tick_square_icon.svg": "25ddeb016c791e28d268c5606f3846b3",
"assets/assets/icons/wifi_square_icon.svg": "06267859adb0bf475a57b9b0553b8410",
"assets/assets/icons/yellow_settings.svg": "d930040809aba58df8f915c2b0587099",
"assets/assets/images/capture_image_button.png": "e7c885b4dac525dde55d1f669d47c8b6",
"assets/assets/images/computer_graphic.png": "de4c3b6ae78e061355efdd22d1092f45",
"assets/assets/images/confirm_call_booking_bg.png": "3559134468707b8e4c4b596c9b4b7d86",
"assets/assets/images/green_tick_circle.png": "dab1bcc6207b66a2e6cd670c68b7cb18",
"assets/assets/images/lets_get_started_view_bg.png": "eeca5bec86b844c0a61a2afe7a32f185",
"assets/assets/images/lets_get_started_view_graphic.png": "06175ef4534f5a65e440efffd6bd3252",
"assets/assets/images/not_in_geofence_graphic.png": "fff3390bf1ccd417a5510163bcbd03f0",
"assets/assets/images/orbit180_icon.png": "45f5081a26119e70bdc36e7a9a724367",
"assets/assets/images/orbit180_icon_black.png": "2a483ca666b8ba0b69d994306ff934de",
"assets/assets/images/splash_screen_bg.jpg": "7b73350de1603f018526cebd77a10d51",
"assets/assets/images/static_profile_pic.png": "d995d728def36a40a261e36bab9f9bfe",
"assets/assets/images/tour_image_border_indication.png": "57e2abbcd726818dc400b58eeff8e5fc",
"assets/assets/images/tour_image_categories.png": "542b6e2cc0d22b70e45b9ef1285e452d",
"assets/assets/images/tour_image_geofencing.png": "2a7ddee175793e1cf994761c32d8bcbf",
"assets/assets/images/tour_image_upload.png": "c90b50373912f6818587c4b589eb45f0",
"assets/assets/images/tour_triangle.png": "ea79ae61c23b3c2ef9c72fc181581c2f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f4b1bcc333f810477ac64096d514ce2f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "024095e0e39a216a127b86d2b1e8ab62",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "758f3954376b7bdfa67a8d548be5924a",
"icons/Icon-192.png": "c9b19052fafca078c9ba58b5d22731b8",
"icons/Icon-512.png": "035d6f86aad17892da74472003c56e1a",
"icons/Icon-maskable-192.png": "c9b19052fafca078c9ba58b5d22731b8",
"icons/Icon-maskable-512.png": "035d6f86aad17892da74472003c56e1a",
"index.html": "a1dc173204ea2a537dc4f896cd7364cb",
"/": "a1dc173204ea2a537dc4f896cd7364cb",
"main.dart.js": "f5dab73087d63f89ea1634aa95b43eaf",
"manifest.json": "d49e660dc82be42eb4a4dec13d02a744",
"version.json": "330d15d3e2a8a899101078e4db285490"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
