!(function () {
	var e = document.head.querySelector('meta[name="ketch-tag-id"]'),
		t = "ngrok_ketch_tag_local";
	e && "content" in e && (t = e.content),
		(window.semaphore = window.semaphore || []),
		(window.ketch = function () {
			window.semaphore.push(arguments);
		});
	var n = new URLSearchParams(document.location.search),
		o = n.has("property") ? n.get("property") : t,
		a = document.createElement("script");
	(a.type = "text/javascript"),
		(a.src = "https://global.ketchcdn.com/web/v2/config/ngrok/".concat(
			o,
			"/boot.js"
		)),
		(a.defer = a.async = !0),
		document.getElementsByTagName("head")[0].appendChild(a);
})();
