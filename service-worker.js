/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9d891158ccd51d0d5be1dedea69dff20"
  },
  {
    "url": "assets/css/0.styles.c81a3c92.css",
    "revision": "e6f36ab6ef2b6e7085a9a16cffd66115"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/a1.d6a85464.png",
    "revision": "d6a8546457f18103565839288b94d709"
  },
  {
    "url": "assets/img/a2.2ef0458f.png",
    "revision": "2ef0458f7603998bb85c47cdd4b1b8f3"
  },
  {
    "url": "assets/img/a3.970bee7b.png",
    "revision": "970bee7bb33ba39b12677897f6f2235d"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/s1.6600e70b.png",
    "revision": "6600e70b132a0297a58cc02fbdd2d09b"
  },
  {
    "url": "assets/img/s10.42fe66bb.png",
    "revision": "42fe66bb52539fba2316177acc5a651b"
  },
  {
    "url": "assets/img/s11.9434c781.png",
    "revision": "9434c781e3910a65423df51f698c1332"
  },
  {
    "url": "assets/img/s12.1495027d.png",
    "revision": "1495027dc3cde6b2a277096260e823bb"
  },
  {
    "url": "assets/img/s13.3cab8237.png",
    "revision": "3cab8237cb477db69177db09379954f9"
  },
  {
    "url": "assets/img/s2.3ba91751.png",
    "revision": "3ba9175107726dc94a9620cff72cf9ad"
  },
  {
    "url": "assets/img/s3.b54c39ce.png",
    "revision": "b54c39ce8f39fd447718d403c20b6b6c"
  },
  {
    "url": "assets/img/s4.efe5f953.png",
    "revision": "efe5f9536f1b21f1cc6c4e15b427438f"
  },
  {
    "url": "assets/img/s5.20e98389.png",
    "revision": "20e983891ec230c9b0ad26d5b783aaf4"
  },
  {
    "url": "assets/img/s6.8dd1dbae.png",
    "revision": "8dd1dbaefb795372f8c2d19f502a1453"
  },
  {
    "url": "assets/img/s7.68ea67dd.png",
    "revision": "68ea67ddaafbf1662e0fb05e8cbddd8b"
  },
  {
    "url": "assets/img/s8.4eb776a4.png",
    "revision": "4eb776a4db66056ed245e62fd13d1be2"
  },
  {
    "url": "assets/img/s9.0cad4b41.png",
    "revision": "0cad4b41dcc9f305b2ef863aeffb025c"
  },
  {
    "url": "assets/img/xiaoguo.7026e8bb.png",
    "revision": "7026e8bb54f0c3cd36a4b27df09e248f"
  },
  {
    "url": "assets/js/1.c109ec72.js",
    "revision": "c166d976d7ffb81373e597540984aa43"
  },
  {
    "url": "assets/js/10.2c4a74b8.js",
    "revision": "428823c1d98c2cea05866cb1221e8a88"
  },
  {
    "url": "assets/js/11.49518da4.js",
    "revision": "1d840448eba685228e59ce8aef63f11f"
  },
  {
    "url": "assets/js/12.89e36af6.js",
    "revision": "817d1920c54d88d5a036c0b904c4bcd9"
  },
  {
    "url": "assets/js/13.55eb9182.js",
    "revision": "96877bed86eff534ed54368733c45e1a"
  },
  {
    "url": "assets/js/14.633e61fd.js",
    "revision": "7ac37faaf9f797d4f41af1541f874cf1"
  },
  {
    "url": "assets/js/15.554fbfb8.js",
    "revision": "395a5667adbcb46da9acf1db25655146"
  },
  {
    "url": "assets/js/16.9f936274.js",
    "revision": "3d7d8251ed7a035ce1944c51d032ca3d"
  },
  {
    "url": "assets/js/17.ec00c7db.js",
    "revision": "6beea108a7d6b23a5fe2f489a2a3c0c9"
  },
  {
    "url": "assets/js/18.78f55bcc.js",
    "revision": "ec54e5b90a3e7fd5d2fcf0ba6f4012b2"
  },
  {
    "url": "assets/js/19.6db5be48.js",
    "revision": "025816c9abf7dba994c2c1daa26baae5"
  },
  {
    "url": "assets/js/20.44af6411.js",
    "revision": "eae37e29b59d80a2e4a86bc0cab4d592"
  },
  {
    "url": "assets/js/21.62b09505.js",
    "revision": "fd749bb9c192ff2d32c16e60d13c3f5f"
  },
  {
    "url": "assets/js/22.30592b4e.js",
    "revision": "3cac8e1c8ae7972d37662e8623b23f24"
  },
  {
    "url": "assets/js/23.4be02e0b.js",
    "revision": "3bf9e3cf01b21679af7d52473e9edfd3"
  },
  {
    "url": "assets/js/24.3584acc4.js",
    "revision": "9e26a0ec0272d0ef2acbc90df1f6d2fb"
  },
  {
    "url": "assets/js/4.ee2627de.js",
    "revision": "098e46870bbc95ec063ddc26ca142202"
  },
  {
    "url": "assets/js/5.b4f9080a.js",
    "revision": "00f4f1d4272ea1721b933dd4f983bdd9"
  },
  {
    "url": "assets/js/6.5900032f.js",
    "revision": "2b29c6b8089421cc2878d99e31cb4a9a"
  },
  {
    "url": "assets/js/7.4473f74f.js",
    "revision": "c17f4a0917fe16ed5f72820b1c129c1c"
  },
  {
    "url": "assets/js/8.375501a8.js",
    "revision": "121b41f3c1c7db141a12f02106ef5422"
  },
  {
    "url": "assets/js/9.211950bd.js",
    "revision": "71cee2dd64560324ee4e045e7c7c7e77"
  },
  {
    "url": "assets/js/app.60515ff1.js",
    "revision": "7811de4d38ca132da7066599ca93edc0"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.49c3a647.js",
    "revision": "fc364283fb213116bab8adbc0c50cea4"
  },
  {
    "url": "avatar.png",
    "revision": "b1265131d610742ffe4621771313b960"
  },
  {
    "url": "categories/index.html",
    "revision": "4a91ebcc69bbc94497e70afdbddbecd1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "01c5dc9e3f4f3b47aa99ec5219312bdb"
  },
  {
    "url": "categories/图形化/index.html",
    "revision": "b09f0994c1f46c803281bef6e62e9602"
  },
  {
    "url": "categories/小项目/index.html",
    "revision": "3b34672aa8647f4f8494352c57f31c5a"
  },
  {
    "url": "css/style.css",
    "revision": "51ae696399f4e214d0fb6d5fa851ed8a"
  },
  {
    "url": "guide/index.html",
    "revision": "56b43178b645162fff2c4c1c8bf51201"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "8bfe21c0d587d7f692fc1613fc953287"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "e92d30dc73fee9628bbc4ed66b3d4784"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "index.html",
    "revision": "40273084dd6f24ec2f002b5f0387e670"
  },
  {
    "url": "js/custom.js",
    "revision": "761ec4dae920bdb963027ec33f280f42"
  },
  {
    "url": "tag/index.html",
    "revision": "cf127d33dcd568525ced0582548beaa4"
  },
  {
    "url": "tags/css/index.html",
    "revision": "54bba77301cea4cebcaf8406a7ae4b13"
  },
  {
    "url": "tags/html/index.html",
    "revision": "3c1f231c15882229a1218a812a9d3838"
  },
  {
    "url": "tags/javaScript/index.html",
    "revision": "ccb057820fbf968171db4fc257f6572c"
  },
  {
    "url": "tags/js/index.html",
    "revision": "1150c7dfc500a791ee54816109c43b2e"
  },
  {
    "url": "tags/图形化/index.html",
    "revision": "adb272ce555304104198c022c24305f2"
  },
  {
    "url": "tags/积木块/index.html",
    "revision": "ecfb6a9d72be44ac97598dfc6f56bb2e"
  },
  {
    "url": "timeline/index.html",
    "revision": "7d5b98ba1b77d42a72cdb9a1881ea2dc"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/java/index.html",
    "revision": "0a0019122a3620d8227e7b51e7d56c0e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "daf20b742d0ead107a45ce7a47e77871"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "4ac67686ae94c6bc7680e10451222735"
  },
  {
    "url": "技术文章/前端基础-CSS/css.html",
    "revision": "687ee3e79e2ab5e809b6890536d115f3"
  },
  {
    "url": "技术文章/前端基础-HTML/html.html",
    "revision": "ae00c07544217ab4bf9d165841cc4217"
  },
  {
    "url": "技术文章/前端基础-javaScript/javaScript.html",
    "revision": "2c0de95615ebe23c93fb10c78add180d"
  },
  {
    "url": "技术文章/前端基础/vue01.html",
    "revision": "b36d56fd27a2d9d27abc532fec5fdbca"
  },
  {
    "url": "技术文章/图形化编程/Scratch.html",
    "revision": "628715d99fa7ffa2f18020b945c4b298"
  },
  {
    "url": "技术文章/模拟手写/AnalogHandwriting.html",
    "revision": "ccdd1e21aa1719dea91f4306d96db9e4"
  },
  {
    "url": "生活分享/life.html",
    "revision": "358c6391b60a1d541b73c44d23eef772"
  },
  {
    "url": "生活分享/love.html",
    "revision": "382929dbc1b7a8ce8c848b17feca028c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
