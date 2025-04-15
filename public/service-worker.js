
self.addEventListener('install', function (event) {
  console.log('[ServiceWorker] 설치 완료');
});

self.addEventListener('activate', function (event) {
  console.log('[ServiceWorker] 활성화 완료');
});

self.addEventListener('fetch', function (event) {
  // 기본 패스스루
});
