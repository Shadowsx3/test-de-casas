'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "96822a1b06bdee8fefdbb6d7c8b359da",
"assets/AssetManifest.json": "5196c833d66a77f7d32751befcfa9950",
"assets/assets/data/questions.json": "3bd2f60a2ee00895b0fcc1d23ee03acc",
"assets/assets/images/1.png": "ec053e34dfb265f62bd005cf61db47ab",
"assets/assets/images/10.png": "a656b8aafea9937fe4221b15d719ec3e",
"assets/assets/images/11.png": "5bc140355783aa005b2e9a0c7a0f5526",
"assets/assets/images/12.png": "c342ff3a1dd68e4801caf21347157d4f",
"assets/assets/images/13.png": "dda286d46f1f6be448f15488ca2fccab",
"assets/assets/images/14.png": "b798257cd4774f69040a6429371d0c70",
"assets/assets/images/15.png": "ac964c9407b124b41d4e1c7776a025b5",
"assets/assets/images/16.png": "b0917289e49d786e64b14f1ffb27f1b6",
"assets/assets/images/17.png": "dac691c6cac2a6bd839a82066290f6d5",
"assets/assets/images/18.png": "09cfdef55c50395a5e8bb57be180b0f9",
"assets/assets/images/19.png": "4f02c2411d39c1211a461aa34d6093cb",
"assets/assets/images/2.png": "2f1a0fe851d8cd469f2bcb8149d1587a",
"assets/assets/images/20-1.png": "0f7d3cbb6bbcc32e461f115426ff231c",
"assets/assets/images/20-2.png": "44a373f85b3a1b216cd0e34f5f6e67fd",
"assets/assets/images/20-3.png": "802629030aa5af5a6d2e433336817c89",
"assets/assets/images/20-4.png": "6ace4d432c63d025f572e80f0342c481",
"assets/assets/images/21-1.png": "ab1eab00aa0ac2ac75a6fd14eb3a55e3",
"assets/assets/images/21-2.png": "8350d07ee1362ff652f38e538ab3255c",
"assets/assets/images/21-3.png": "53a9bd840dd41ad5f71896f0228a12d7",
"assets/assets/images/21-4.png": "f0c3731b5d6ecf3b0f6fd5cdd3c0dcc2",
"assets/assets/images/22-1.png": "33b1ead2b36b6e7d33329dbaf43d5b51",
"assets/assets/images/22-2.png": "31831c26825a062e6e99043b8fb366e7",
"assets/assets/images/22-3.png": "f8bcc78135793179da5fd00c0b65a808",
"assets/assets/images/22-4.png": "c3c9cb17657f1228a004645be324e302",
"assets/assets/images/23.png": "e6f8ec4d6cecefbdbf428644cc7d4bd0",
"assets/assets/images/24.png": "018c35327881fe525a2622c587e101ad",
"assets/assets/images/25-1.png": "8bde686d9f6869f88368dbe322a70c71",
"assets/assets/images/25-2.png": "47a9300546ffa373cd07cfc3e15ed6b3",
"assets/assets/images/25-3.png": "6847a5753a138cabee7a639fb741702a",
"assets/assets/images/25-4.png": "12b86169c5bcd50a4b6be908836086a8",
"assets/assets/images/26-1.png": "0799b3ce364a25e9c731c2b04be88aeb",
"assets/assets/images/26-2.png": "663ee2397a2fb573fdc1a69bac80b16d",
"assets/assets/images/26-3.png": "b508704746ed9a6d0bbac30f5755792f",
"assets/assets/images/26-4.png": "f38268f86ced66455533104ba6496e7a",
"assets/assets/images/3.png": "461f2e5cfd215a82ebc2767fbd14eb21",
"assets/assets/images/4-1.png": "7909d7863bd3162e64b313f5ca2da82f",
"assets/assets/images/4-2.png": "f41b29f1d7a273a64d55cc1763617325",
"assets/assets/images/4-3.png": "c5ff7987bc35b839e55b6b1c08aba353",
"assets/assets/images/4-4.png": "672cd98340fdb1fb44be9d69994152da",
"assets/assets/images/5-1.png": "8f7a0afa05d432420f9be0ab4907b51f",
"assets/assets/images/5-2.png": "0ec552f8fadd10bdeff141c1d7f0e052",
"assets/assets/images/5-3.png": "b4fedf3b5e5dfbb7456264ceda5fbcdf",
"assets/assets/images/5-4.png": "cb15681074a022eb0a3205297a73867c",
"assets/assets/images/6.png": "42778eb3b7b2698ccb969dd3ec522c1f",
"assets/assets/images/7-1.png": "9370a26d92f7dae811d20ddfd6f4467b",
"assets/assets/images/7-2.png": "d3aecbd2622f7a65a6d07958fe29ed12",
"assets/assets/images/7-3.png": "ee3c8f456b38061e59a2ea1255d461e1",
"assets/assets/images/7-4.png": "15ebaa329461da4d1f189fb3d0e5ab2a",
"assets/assets/images/8-1.png": "77e59dc2d6c76dd2c25272a3602d316a",
"assets/assets/images/8-2.png": "d5348668ab52792a6c43bf4e05c3756a",
"assets/assets/images/8-3.png": "151c5d30d71840f4afe7383d1266fce7",
"assets/assets/images/8-4.png": "918286e2548975af140e80de3c57e1e5",
"assets/assets/images/8-5.png": "2e60fbcb7a26063a83bb305be503519a",
"assets/assets/images/8-6.png": "3239af5c82b2f6cc0efaa0f61428b6d1",
"assets/assets/images/9.png": "41c68b0e1dd799015b7d47ffa45d5cbb",
"assets/assets/images/DIPHENIX.png": "2536cab3ea8442f99a90f044bba03b54",
"assets/assets/images/DRACONUS.png": "97e899db50d5ec87b72b64478a7597fb",
"assets/assets/images/escudos.png": "a1a2a8aff95c28e88c55c42c57151d11",
"assets/assets/images/fondo.png": "53b0c657b601999b36937711ad3908a7",
"assets/assets/images/MYSTICORN.png": "e5de9395adf4e2b4c66513e13b1e92ec",
"assets/assets/images/VULPIRE.png": "daa4286583b7feef0cdbfa37b37d5959",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4a2c8f1d21a1002c0b5fbae20cd77657",
"/": "4a2c8f1d21a1002c0b5fbae20cd77657",
"main.dart.js": "831fbf1fc2691b709f5dd868ed0e1fcc",
"manifest.json": "c184992f713a5d28abeba0f930bd7a0a",
"version.json": "1ab78387007cfba884b8432a4af6b715"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
