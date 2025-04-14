(() => {
	window.semaphore = window.semaphore || [];
	window.ketch = (...args) => {
		window.semaphore.push(args);
	};
})();
