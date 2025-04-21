const waitForEl = (selector, callback) => {
	if (document.querySelector(selector) !== null) {
		callback();
	} else {
		setTimeout(() => {
			waitForEl(selector, callback);
		}, 100);
	}
};

document.addEventListener("DOMContentLoaded", () => {
	if (document.location.hash) {
		const anchor = document.location.hash;
		waitForEl(anchor, () => {
			document.querySelector(anchor).scrollIntoView();
		});
	}
});
