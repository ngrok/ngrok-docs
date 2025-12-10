window.semaphore = window.semaphore || [];
window.ketch = function() {
  window.semaphore.push(arguments);
};

(function loadKetch(ketchTagId) {
  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.src = `https://global.ketchcdn.com/web/v2/config/ngrok/${ketchTagId}/boot.js`;
  document.head.appendChild(script);
})("ngrok_ketch_tag");
