import * as dateFns from "date-fns";
// import type {NonNullProperties} from '~/types'
import { camelize, underscore } from "inflected";
import * as React from "react";

const DEFAULT_REDIRECT = "/";

export function safeRedirect(
	to: FormDataEntryValue | string | null | undefined,
	defaultRedirect: string = DEFAULT_REDIRECT,
) {
	if (!to || typeof to !== "string") {
		return defaultRedirect;
	}

	if (!to.startsWith("/") || to.startsWith("//")) {
		return defaultRedirect;
	}

	return to;
}

const useSSRLayoutEffect =
	typeof window === "undefined" ? () => {} : React.useLayoutEffect;

function formatTime(seconds: number) {
	return dateFns.format(dateFns.addSeconds(new Date(0), seconds), "mm:ss");
}

const formatNumber = (num: number) => new Intl.NumberFormat().format(num);

function formatAbbreviatedNumber(num: number) {
	return num < 1_000
		? formatNumber(num)
		: num < 1_000_000
			? `${formatNumber(Number((num / 1_000).toFixed(2)))}k`
			: num < 1_000_000_000
				? `${formatNumber(Number((num / 1_000_000).toFixed(2)))}m`
				: num < 1_000_000_000_000
					? `${formatNumber(Number((num / 1_000_000_000).toFixed(2)))}b`
					: "a lot";
}

function formatDate(dateString: string) {
	return dateFns.format(
		dateFns.add(dateFns.parseISO(dateString), {
			minutes: new Date().getTimezoneOffset(),
		}),
		"PPP",
	);
}

function getErrorMessage(error: unknown) {
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.message;
	return "Unknown Error";
}

function getErrorStack(error: unknown) {
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.stack;
	return "Unknown Error";
}

// function getNonNull<Type extends Record<string, null | undefined | unknown>>(
//   obj: Type,
// ): NonNullProperties<Type> {
//   for (const [key, val] of Object.entries(obj)) {
//     assertNonNull(val, `The value of ${key} is null but it should not be.`)
//   }
//   return obj as NonNullProperties<Type>
// }

function typedBoolean<T>(
	value: T,
): value is Exclude<T, "" | 0 | false | null | undefined> {
	return Boolean(value);
}

function assertNonNull<PossibleNullType>(
	possibleNull: PossibleNullType,
	errorMessage: string,
): asserts possibleNull is Exclude<PossibleNullType, null | undefined> {
	if (possibleNull == null) throw new Error(errorMessage);
}

function getDomainUrl(request: Request) {
	const host =
		request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
	if (!host) {
		throw new Error("Could not determine domain URL.");
	}
	const protocol = host.includes("localhost") ? "http" : "https";
	return `${protocol}://${host}`;
}

function removeTrailingSlash(s: string) {
	return s.endsWith("/") ? s.slice(0, -1) : s;
}

function getDisplayUrl(requestInfo?: { origin: string; path: string }) {
	return getUrl(requestInfo).replace(/^https?:\/\//, "");
}

function getUrl(requestInfo?: { origin: string; path: string }) {
	return removeTrailingSlash(
		`${requestInfo?.origin ?? "localhost"}${requestInfo?.path ?? ""}`,
	);
}

function toBase64(string: string) {
	if (typeof window === "undefined") {
		return Buffer.from(string).toString("base64");
	} else {
		return window.btoa(string);
	}
}

function useUpdateQueryStringValueWithoutNavigation(
	queryKey: string,
	queryValue: string,
) {
	React.useEffect(() => {
		const currentSearchParams = new URLSearchParams(window.location.search);
		const oldQuery = currentSearchParams.get(queryKey) ?? "";
		if (queryValue === oldQuery) return;

		if (queryValue) {
			currentSearchParams.set(queryKey, queryValue);
		} else {
			currentSearchParams.delete(queryKey);
		}
		const newUrl = [window.location.pathname, currentSearchParams.toString()]
			.filter(Boolean)
			.join("?");
		window.history.replaceState(null, "", newUrl);
	}, [queryKey, queryValue]);
}

function debounce<Callback extends (...args: Array<unknown>) => void>(
	fn: Callback,
	delay: number,
) {
	let timer: ReturnType<typeof setTimeout> | null = null;
	return (...args: Parameters<Callback>) => {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			fn(...args);
		}, delay);
	};
}

function useDebounce<Callback extends (...args: Array<unknown>) => unknown>(
	callback: Callback,
	delay: number,
) {
	const callbackRef = React.useRef(callback);
	React.useEffect(() => {
		callbackRef.current = callback;
	});
	return React.useMemo(
		() => debounce((...args) => callbackRef.current(...args), delay),
		[delay],
	);
}

const reuseUsefulLoaderHeaders = ({ loaderHeaders }: any) => {
	const headers = new Headers();
	const usefulHeaders = ["Cache-Control", "Vary", "Server-Timing"];
	for (const headerName of usefulHeaders) {
		if (loaderHeaders.has(headerName)) {
			headers.set(headerName, loaderHeaders.get(headerName)!);
		}
	}

	return headers;
};

function callAll<Args extends Array<unknown>>(
	...fns: Array<((...args: Args) => unknown) | undefined>
) {
	return (...args: Args) => fns.forEach((fn) => fn?.(...args));
}

function useDoubleCheck() {
	const [doubleCheck, setDoubleCheck] = React.useState(false);

	function getButtonProps(props?: JSX.IntrinsicElements["button"]) {
		const onBlur: JSX.IntrinsicElements["button"]["onBlur"] = () =>
			setDoubleCheck(false);

		const onClick: JSX.IntrinsicElements["button"]["onClick"] = doubleCheck
			? undefined
			: (e) => {
					e.preventDefault();
					setDoubleCheck(true);
				};

		return {
			...props,
			onBlur: callAll(onBlur, props?.onBlur),
			onClick: callAll(onClick, props?.onClick),
		};
	}

	return { doubleCheck, getButtonProps };
}

/**
 * Wrap a value in a resolved Promise returning it
 */
export function resolved<Value>(value: Value): Promise<Value> {
	return Promise.resolve(value);
}

/**
 * Wrap a value in an array if it's not already an array
 */
export function toArray<Value = unknown>(value: Value | Value[]): Value[] {
	if (Array.isArray(value)) return value;
	return [value];
}

/**
 * Remove duplicated values from an array (only primitives and references)
 */
export function unique<Value>(array: Value[]): Value[] {
	return [...new Set(array)];
}

/**
 * Check the environment the app is currently running
 */
export function env(
	environment: "production" | "test" | "development",
): boolean {
	return process.env.NODE_ENV === environment;
}

/**
 * Check if an object has a property
 */
export function hasOwn<This extends Record<string, unknown>>(
	object: This,
	property: keyof This,
): boolean {
	return Object.hasOwn(object, property);
}

/**
 * A function that does nothing
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop(): void {}

/**
 * Check if the current runtime of the code is server or browser
 */
export function runtime(name: "server" | "browser"): boolean {
	switch (name) {
		case "browser": {
			return typeof window === "object" && typeof document === "object";
		}
		case "server": {
			return typeof process !== "undefined" && Boolean(process.versions?.node);
		}
	}
}

let browser = false;

/**
 * Check if the component is currently on a Browser environment
 */
export function useIsBrowser() {
	const [isBrowser, setIsBrowser] = React.useState(browser);

	React.useEffect(() => {
		if (browser) return;
		browser = true;
		setIsBrowser(true);
	}, []);

	return isBrowser;
}

/**
 * Wait for a certain amount of time before doing something else
 */
export function wait(time: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * Get a random number from a range of two possible numbers
 */
export function random(
	min = Number.MIN_SAFE_INTEGER,
	max = Number.MAX_SAFE_INTEGER,
): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Check if the user requested to not be tracked
 */
export function doNotTrack(request: Request) {
	const header = request.headers.get("DNT") ?? "null";
	return header === "1";
}

/**
 * Check if the user requested to receive less data
 */
export function saveData(request: Request) {
	const header = request.headers.get("Save-Data") ?? "off";
	return header === "on";
}

/**
 * Capitalize every word in a sentence
 */
export function capitalize(string: string): string {
	return string
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");
}

/**
 * Check if an array has any element inside
 */
export function hasAny<Value>(list: Value[]): boolean {
	return list.length > 0;
}

/**
 * Check if an array is empty
 */
export function isEmpty<Value>(list: Value[]): boolean {
	return list.length === 0;
}

/**
 * Serialize a value to a JSON string using snake_case for the keys
 */
export function serialize<Input>(input: Input): string {
	return JSON.stringify(input, (_: string, value: unknown) => {
		if (typeof value === "object" && !Array.isArray(value) && value !== null) {
			const entries = Object.entries(value).map((entry) => [
				underscore(entry[0]),
				entry[1],
			]);
			return Object.fromEntries(entries);
		}

		return value;
	});
}

/**
 * Parse an JSON string to a JS object with the keys in camelCase
 */
export function parse<Output>(input: string): Output {
	return JSON.parse(input, (_key, value: unknown) => {
		if (typeof value === "object" && !Array.isArray(value) && value !== null) {
			const entries = Object.entries(value).map((entry) => [
				camelize(entry[0], false),
				entry[1],
			]);
			return Object.fromEntries(entries);
		}
		return value;
	});
}

/**
 * Get the first n items of an array, defaults to one item
 */
export function first<Value>(list: Value[], limit = 1): Value[] {
	return list.slice(0, limit);
}

export {
	getErrorMessage,
	getErrorStack,
	// getNonNull,
	assertNonNull,
	useUpdateQueryStringValueWithoutNavigation,
	useSSRLayoutEffect,
	useDoubleCheck,
	useDebounce,
	typedBoolean,
	getDomainUrl,
	getUrl,
	getDisplayUrl,
	toBase64,
	removeTrailingSlash,
	reuseUsefulLoaderHeaders,
	formatDate,
	formatTime,
	formatNumber,
	formatAbbreviatedNumber,
};
