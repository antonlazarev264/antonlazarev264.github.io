'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1abe7c3f1103242a9d3d7093b9d6d112",
"version.json": "cc8c0cc28a17b2fc9e0e731499c9abe3",
"index.html": "c5232eda3df3b1c221862c048a4276c1",
"/": "c5232eda3df3b1c221862c048a4276c1",
"main.dart.js": "aeed350e7ed9847de7759d89b4763faa",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "29acf4bb8e277fa7ebc48756b66603c0",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "ac2a710cdf13185e170c07ad9a5d0d73",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"antonlazarev264.github.io/flutter_bootstrap.js": "0c976a3de02b6423fd1354e92b93e5fb",
"antonlazarev264.github.io/version.json": "cc8c0cc28a17b2fc9e0e731499c9abe3",
"antonlazarev264.github.io/index.html": "c5232eda3df3b1c221862c048a4276c1",
"antonlazarev264.github.io/main.dart.js": "ec9f7282bd3f815d1323919370c8f89f",
"antonlazarev264.github.io/flutter.js": "76f08d47ff9f5715220992f993002504",
"antonlazarev264.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"antonlazarev264.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"antonlazarev264.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"antonlazarev264.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"antonlazarev264.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"antonlazarev264.github.io/manifest.json": "29acf4bb8e277fa7ebc48756b66603c0",
"antonlazarev264.github.io/.git/config": "8bd9e3a9a7913f94567154df77b162c3",
"antonlazarev264.github.io/.git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
"antonlazarev264.github.io/.git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
"antonlazarev264.github.io/.git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
"antonlazarev264.github.io/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"antonlazarev264.github.io/.git/objects/35/cab777b79dea88bbf353baf942fe890148b756": "2a5b209f0bbb748610fe6e6fd9b5ab8b",
"antonlazarev264.github.io/.git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
"antonlazarev264.github.io/.git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
"antonlazarev264.github.io/.git/objects/58/285efc495d5f8425fa1211e955ac4e7e2880fa": "b62d32de545680749c37300eda5169b7",
"antonlazarev264.github.io/.git/objects/67/1fee61141ad59ba71656b93959f101ba6818cb": "4f4dda2a18b7e05f825be85423a47ec2",
"antonlazarev264.github.io/.git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
"antonlazarev264.github.io/.git/objects/05/bea05d04196770c66b82ab144f73f7c42aa8cf": "f6eb58761645817c572ee1b2d5fc3e3b",
"antonlazarev264.github.io/.git/objects/05/e83c36db50b71fdb78cf12937a45f8ef69befc": "ef6cf80f1aad34061347a2ddadb0c81f",
"antonlazarev264.github.io/.git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
"antonlazarev264.github.io/.git/objects/bb/f34bccd044fa71cbaaf736e9f5ac854b673204": "1987bd6ea073136d4ab1293e752955b1",
"antonlazarev264.github.io/.git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
"antonlazarev264.github.io/.git/objects/df/6ba32b6c5113f8fe8e8bd1c93bd288bb753cc8": "5a90f52d3f5e1dd9e137543ac9796e1b",
"antonlazarev264.github.io/.git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
"antonlazarev264.github.io/.git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
"antonlazarev264.github.io/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"antonlazarev264.github.io/.git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
"antonlazarev264.github.io/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"antonlazarev264.github.io/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"antonlazarev264.github.io/.git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
"antonlazarev264.github.io/.git/objects/e3/3a3e1f4a48641ec0f5d9083696bf4034d6424f": "79a318219699da057c3e15723aaf0021",
"antonlazarev264.github.io/.git/objects/cf/4d6474f8692dec45028eeb79fac200a9db3d84": "4b7714524a4bcce0926d27bec6111f32",
"antonlazarev264.github.io/.git/objects/16/9d65b129786f1f25c45ebd40dafd292a51db1d": "0db73c8ccba2ebbbb80627a38990c4e8",
"antonlazarev264.github.io/.git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
"antonlazarev264.github.io/.git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
"antonlazarev264.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"antonlazarev264.github.io/.git/objects/75/ed177d41fe35a7cabdceeed86104fb13b833e4": "e272f78f0c7b4b9206635540d0f92184",
"antonlazarev264.github.io/.git/objects/44/b76151b7fdeb3bade530add7788c43412010fd": "ff99fac37238d3feba7cd4a7201161cf",
"antonlazarev264.github.io/.git/objects/43/f2092996b80408c6ef05b00b9ae7b7789ce2f7": "d6113a1c0dd8c4e20e582093a2a0a5ed",
"antonlazarev264.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"antonlazarev264.github.io/.git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
"antonlazarev264.github.io/.git/objects/36/73be9e229a5c9c6d1cd55cbe847dbb7e6cdde0": "dbac3cea488e46fc3a409c64580f3e34",
"antonlazarev264.github.io/.git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
"antonlazarev264.github.io/.git/objects/01/3ee042814647b1b718df95662d036244c97102": "94f7e6e9a1adb30263fbb43f99c3b1be",
"antonlazarev264.github.io/.git/objects/01/54885881ceaa3afd10f1e7ba206f48fbeb13ee": "e2d6a2493e535667f52ca4243e384272",
"antonlazarev264.github.io/.git/objects/01/1d0ac7cf750c210f5fb5365e6502a5e9b1a25a": "dc019402511971584f0026c9012bd724",
"antonlazarev264.github.io/.git/objects/6c/788139cfb20c29297f1a2ccfec7b66a7ab3b50": "00be1b87bf636444d50600d472e8fd91",
"antonlazarev264.github.io/.git/objects/d3/5f7157d68c0f4781a6b6c99f6f3db8290f60ba": "df3ea0d85eb38a5d6d1914f36712108d",
"antonlazarev264.github.io/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"antonlazarev264.github.io/.git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
"antonlazarev264.github.io/.git/objects/b6/bc7ebd9639071ddf2f4034d70a2e673628508c": "98c9b78263a5a5c434366ae06eaa6404",
"antonlazarev264.github.io/.git/objects/a9/5c5b26b2c3367b0e52b19f31b3455cb45328d7": "232f44f6c4feb6d76d723e19d013134b",
"antonlazarev264.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"antonlazarev264.github.io/.git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
"antonlazarev264.github.io/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"antonlazarev264.github.io/.git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
"antonlazarev264.github.io/.git/objects/f7/26222caac57e447c56415b4a0cafeeafb44698": "b23c086d3d2ab20728219e2878df3572",
"antonlazarev264.github.io/.git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
"antonlazarev264.github.io/.git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
"antonlazarev264.github.io/.git/objects/cb/e1565417f7cf1c64904f0592c05f67ee0fd815": "9d955d0748e66967f1a2b31130c565a1",
"antonlazarev264.github.io/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"antonlazarev264.github.io/.git/objects/79/9acbc620e981caf6bff9ad68fb42b72b26b584": "4e00beef16749618144ec7d08d9f7623",
"antonlazarev264.github.io/.git/objects/70/42d5ce12d1f26e100f17ad89f570ae36816c85": "ea00785324466763aa8e1467e3bd0fd1",
"antonlazarev264.github.io/.git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
"antonlazarev264.github.io/.git/objects/4f/35cf55910669e2f62488ca1d890080a41c59a7": "a70bf9cb4eef9f9d3c357e06b7f80718",
"antonlazarev264.github.io/.git/objects/8d/c273397927ddc18fab229d9b70174096e7e23f": "d01f3a713d88db2335e8e1676cdc5aee",
"antonlazarev264.github.io/.git/objects/76/d60d2fd7fc350e50148a50b042c39b0580da19": "1de089e8376a505f9e13a729ed23003d",
"antonlazarev264.github.io/.git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
"antonlazarev264.github.io/.git/objects/13/edaf6205e64f4bdd3ea43b1476f61a3f9ec54e": "3e42119b6dc5298da71449d2494d2a22",
"antonlazarev264.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"antonlazarev264.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"antonlazarev264.github.io/.git/logs/HEAD": "69df9f65f54aec9eff1a623a0dc3b1ed",
"antonlazarev264.github.io/.git/logs/refs/heads/main": "69df9f65f54aec9eff1a623a0dc3b1ed",
"antonlazarev264.github.io/.git/logs/refs/remotes/origin/main": "c1492e64bd754c49457697c8f5e07325",
"antonlazarev264.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"antonlazarev264.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"antonlazarev264.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"antonlazarev264.github.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"antonlazarev264.github.io/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"antonlazarev264.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"antonlazarev264.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"antonlazarev264.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"antonlazarev264.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"antonlazarev264.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"antonlazarev264.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"antonlazarev264.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"antonlazarev264.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"antonlazarev264.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"antonlazarev264.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"antonlazarev264.github.io/.git/refs/heads/main": "7e894a5d89f66d02a3b3c255adde603e",
"antonlazarev264.github.io/.git/refs/remotes/origin/main": "7e894a5d89f66d02a3b3c255adde603e",
"antonlazarev264.github.io/.git/index": "42be788c7c218b350ca17e9f7c900544",
"antonlazarev264.github.io/.git/COMMIT_EDITMSG": "21e826bb9ab685994b492d14016ca571",
"antonlazarev264.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"antonlazarev264.github.io/assets/NOTICES": "ac2a710cdf13185e170c07ad9a5d0d73",
"antonlazarev264.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"antonlazarev264.github.io/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"antonlazarev264.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"antonlazarev264.github.io/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"antonlazarev264.github.io/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"antonlazarev264.github.io/assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"antonlazarev264.github.io/canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"antonlazarev264.github.io/canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"antonlazarev264.github.io/canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"antonlazarev264.github.io/canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"antonlazarev264.github.io/canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"antonlazarev264.github.io/canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"antonlazarev264.github.io/canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"antonlazarev264.github.io/canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"antonlazarev264.github.io/canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"antonlazarev264.github.io/canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"antonlazarev264.github.io/canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"antonlazarev264.github.io/canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
