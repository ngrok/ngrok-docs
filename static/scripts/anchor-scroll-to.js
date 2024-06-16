var waitForEl = function (selector, callback) {
	if (document.querySelector(selector) !== null) {
		callback();
	} else {
		setTimeout(function () {
			waitForEl(selector, callback);
		}, 100);
	}
};

document.addEventListener("DOMContentLoaded", function () {
	if (document.location.hash) {
		var anchor = document.location.hash;
		waitForEl(anchor, function () {
			document.querySelector(anchor).scrollIntoView();
		});
	}
});
