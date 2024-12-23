'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9497c7fb7602d9d2d3f61a35a183cb5b",
"assets/AssetManifest.bin.json": "2c98926ba622b3d5e43d623e26cbf111",
"assets/AssetManifest.json": "2ee4e439deff97857ee63cfbc25626de",
"assets/assets/gifs/geofencing_in_progress.gif": "1c03aa6ae726237e522147a881be2785",
"assets/assets/gifs/location_not_found_gif.gif": "0ee52d5aa46235a66599f1f853bc5e95",
"assets/assets/icons/camera_icon.svg": "fa6e01422defde26bff6ed97abe89197",
"assets/assets/icons/grid_view_icon.svg": "5229d9c927c01d911238bd3023f0d507",
"assets/assets/icons/house_icon.svg": "37fede839d7709ed4038ec55bde61c7e",
"assets/assets/icons/list_view_icon.svg": "698fd2ad7cb398c25d6fd00eeecc0abc",
"assets/assets/icons/orbit_circular_icon.svg": "e4670c373c6cbb562400dd0d486c12e8",
"assets/assets/icons/red_cross_circle.svg": "1851ab15a951e3b66412924fda6e6d64",
"assets/assets/icons/tick_square_icon.svg": "25ddeb016c791e28d268c5606f3846b3",
"assets/assets/icons/wifi_square_icon.svg": "06267859adb0bf475a57b9b0553b8410",
"assets/assets/images/capture_image_button.png": "e7c885b4dac525dde55d1f669d47c8b6",
"assets/assets/images/computer_graphic.png": "de4c3b6ae78e061355efdd22d1092f45",
"assets/assets/images/confirm_call_booking_bg.png": "3559134468707b8e4c4b596c9b4b7d86",
"assets/assets/images/example_image_1.png": "88080e28a08c768c0defad5592ed066f",
"assets/assets/images/example_image_2.png": "260b87a78298ae6a6519d5c25759c2c6",
"assets/assets/images/example_image_3.png": "dc54e02cc16b471ea0f070725693954b",
"assets/assets/images/example_image_4.png": "3c671e662ef2734923ae3a63c60b3d4c",
"assets/assets/images/example_image_5.png": "6e390208b5edf3fc2da6bc16b4c20602",
"assets/assets/images/example_image_6.png": "5dcd53284a44a88ebf9989b5927164d5",
"assets/assets/images/example_image_7.png": "97b05f401381d19e3f574f3c9dd1092d",
"assets/assets/images/example_image_8.png": "736e750764b8188169420cfdad025442",
"assets/assets/images/exterior_photo.png": "e473568b2b7fe4f56b1c46f50652a21e",
"assets/assets/images/geofencing.png": "238f34c8d7829883a5130ec8a287a272",
"assets/assets/images/geofencing_image_green.png": "e3fd2409b936c5994839dfccd0ac2d24",
"assets/assets/images/geofencing_image_yellow.png": "4302fcc3bf5decc7440edb46ce42fa30",
"assets/assets/images/gradient_card_exterior.png": "36f5350c59cfc761ca6eb6f559c96661",
"assets/assets/images/gradient_card_interior.png": "0e80934841307e752ad95ca86b13e5ec",
"assets/assets/images/green_tick_circle.png": "dab1bcc6207b66a2e6cd670c68b7cb18",
"assets/assets/images/help_icon.png": "9d611571468028b8b940a0f4d703bdbe",
"assets/assets/images/interior_photo.png": "72fd9a7a06f61b97c969d6e54d229310",
"assets/assets/images/lets_get_started_view_bg.png": "eeca5bec86b844c0a61a2afe7a32f185",
"assets/assets/images/lets_get_started_view_graphic.png": "06175ef4534f5a65e440efffd6bd3252",
"assets/assets/images/login_view_bg.png": "e3f905e1a599a14e4318a02f84cb03d7",
"assets/assets/images/notification_icon.png": "05d40875d0f19a4aeb606e8e3b1e2774",
"assets/assets/images/not_in_geofence_graphic.png": "fff3390bf1ccd417a5510163bcbd03f0",
"assets/assets/images/orbit180_circular_icon.png": "4ef9e4b19d02c6135293794e42b255c3",
"assets/assets/images/orbit180_icon.png": "45f5081a26119e70bdc36e7a9a724367",
"assets/assets/images/orbit180_icon_black.png": "2a483ca666b8ba0b69d994306ff934de",
"assets/assets/images/splash_screen_bg.png": "5d7a2189a835206aedfad924c064aeff",
"assets/assets/images/static_map.png": "9c6eda262e964dc5266e341a8086d20b",
"assets/assets/images/static_profile_pic.png": "dffe7691a34f2cfe2a4646e4cfbf05ee",
"assets/assets/images/tour_exterior_photo.png": "2df0c91e695eacccd7c5e683e3d5b0bc",
"assets/assets/images/tour_image_border_indication.png": "04dde172e20f601541afb8817ae881c9",
"assets/assets/images/tour_image_geofencing.png": "aac165920ab0d58e711bfb915335220b",
"assets/assets/images/tour_image_upload.png": "6eaf358b3bd22524ad1ca0dcb80eee9e",
"assets/assets/images/tour_interior_photo.png": "1e2fe59c178e9250e4ef7f4cd3ff23e0",
"assets/assets/images/tour_triangle.png": "ea79ae61c23b3c2ef9c72fc181581c2f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "aa74f41404a898539ffe30711e6707c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f6f3451c59c30c4d69d361c302eef150",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a5ebd82a772e5473b9ce5ca148cf95d7",
"/": "a5ebd82a772e5473b9ce5ca148cf95d7",
"main.dart.js": "2dfd6db70c899283ed9bf8d91f5a1d9c",
"manifest.json": "2df83c6a073861a44c43b7b644f8b2a2",
"version.json": "a8da7445e69bcd1ac0b7f80e4d25b048"};
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
