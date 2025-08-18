export const tabParamName = "defaultTabItem";

export const getStoredTab = () => {
	function getStorageItem(key: string) {
		if (localStorage) {
			return localStorage.getItem(key);
		}
		return null;
	}
	const searchParams = new URLSearchParams(window?.location?.search);
	const tempTab =
		searchParams.get(tabParamName) || getStorageItem(tabParamName);

	return tempTab ?? null;
};
