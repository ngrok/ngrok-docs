(function () {
	window.semaphore = window.semaphore || [];
	window.ketch = function () {
		window.semaphore.push(arguments);
	};
})();
