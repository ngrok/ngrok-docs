import { DocSearchButton, useDocSearchKeyboardEvents } from "@docsearch/react";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";
import {
	isRegexpStringMatch,
	useSearchLinkCreator,
} from "@docusaurus/theme-common";
import {
	useAlgoliaContextualFacetFilters,
	useSearchResultUrlProcessor,
} from "@docusaurus/theme-search-algolia/client";
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import translations from "@theme/SearchTranslations";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

let DocSearchModal = null;
function importDocSearchModalIfNeeded() {
	if (DocSearchModal) {
		return Promise.resolve();
	}
	return Promise.all([
		import("@docsearch/react/modal"),
		import("@docsearch/react/style"),
		import("./styles.css"),
	]).then(([{ DocSearchModal: Modal }]) => {
		DocSearchModal = Modal;
	});
}
function useNavigator({ externalUrlRegex }) {
	const history = useHistory();
	const [navigator] = useState(() => {
		return {
			navigate(params) {
				// Algolia results could contain URL's from other domains which cannot
				// be served through history and should navigate with window.location
				if (isRegexpStringMatch(externalUrlRegex, params.itemUrl)) {
					window.location.href = params.itemUrl;
				} else {
					history.push(params.itemUrl);
				}
			},
		};
	});
	return navigator;
}
function useTransformSearchClient() {
	const {
		siteMetadata: { docusaurusVersion },
	} = useDocusaurusContext();
	return useCallback(
		(searchClient) => {
			searchClient.addAlgoliaAgent("docusaurus", docusaurusVersion);
			return searchClient;
		},
		[docusaurusVersion],
	);
}
function useTransformItems(props) {
	const processSearchResultUrl = useSearchResultUrlProcessor();
	const [transformItems] = useState(() => {
		return (items) =>
			props.transformItems
				? // Custom transformItems
					props.transformItems(items)
				: // Default transformItems
					items.map((item) => ({
						...item,
						url: processSearchResultUrl(item.url),
					}));
	});
	return transformItems;
}
function useResultsFooterComponent({ closeModal }) {
	return useMemo(
		() =>
			({ state }) => <ResultsFooter state={state} onClose={closeModal} />,
		[closeModal],
	);
}
function Hit({ hit, children }) {
	/**
	 * We're using <a> instead of <Link> as a temporary workaround until we get server side redirects set up.
	 * Currently we use CSR, which doesn't trigger our redirect script, so search results hit 404s if the page is intended to be redirected.
	 */
	return <a href={`https://ngrok.com${hit.url}`}>{children}</a>;
}
function ResultsFooter({ state, onClose }) {
	const createSearchLink = useSearchLinkCreator();
	return (
		<Link to={createSearchLink(state.query)} onClick={onClose}>
			<Translate
				id="theme.SearchBar.seeAll"
				values={{ count: state.context.nbHits }}
			>
				{"See all {count} results"}
			</Translate>
		</Link>
	);
}
function useSearchParameters({ contextualSearch, ...props }) {
	function mergeFacetFilters(f1, f2) {
		const normalize = (f) => (typeof f === "string" ? [f] : f);
		return [...normalize(f1), ...normalize(f2)];
	}
	const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters();
	const configFacetFilters = props.searchParameters?.facetFilters ?? [];
	const facetFilters = contextualSearch
		? // Merge contextual search filters with config filters
			mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
		: // ... or use config facetFilters
			configFacetFilters;
	// We let users override default searchParameters if they want to
	return {
		...props.searchParameters,
		facetFilters,
	};
}
function DocSearch({ externalUrlRegex, ...props }) {
	const navigator = useNavigator({ externalUrlRegex });
	const searchParameters = useSearchParameters({ ...props });
	const transformItems = useTransformItems(props);
	const transformSearchClient = useTransformSearchClient();
	const searchContainer = useRef(null);
	// TODO remove "as any" after React 19 upgrade
	const searchButtonRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const [initialQuery, setInitialQuery] = useState(undefined);
	const prepareSearchContainer = useCallback(() => {
		if (!searchContainer.current) {
			const divElement = document.createElement("div");
			searchContainer.current = divElement;
			document.body.insertBefore(divElement, document.body.firstChild);
		}
	}, []);
	const openModal = useCallback(() => {
		prepareSearchContainer();
		importDocSearchModalIfNeeded().then(() => setIsOpen(true));
	}, [prepareSearchContainer]);
	const closeModal = useCallback(() => {
		setIsOpen(false);
		searchButtonRef.current?.focus();
		setInitialQuery(undefined);
	}, []);
	const handleInput = useCallback(
		(event) => {
			if (event.key === "f" && (event.metaKey || event.ctrlKey)) {
				// ignore browser's ctrl+f
				return;
			}
			// prevents duplicate key insertion in the modal input
			event.preventDefault();
			setInitialQuery(event.key);
			openModal();
		},
		[openModal],
	);
	const resultsFooterComponent = useResultsFooterComponent({ closeModal });
	useDocSearchKeyboardEvents({
		isOpen,
		onOpen: openModal,
		onClose: closeModal,
		onInput: handleInput,
		searchButtonRef,
	});
	return (
		<>
			<Head>
				{/* This hints the browser that the website will load data from Algolia,
        and allows it to preconnect to the DocSearch cluster. It makes the first
        query faster, especially on mobile. */}
				<link
					rel="preconnect"
					href={`https://${props.appId}-dsn.algolia.net`}
					crossOrigin="anonymous"
				/>
			</Head>

			<DocSearchButton
				onTouchStart={importDocSearchModalIfNeeded}
				onFocus={importDocSearchModalIfNeeded}
				onMouseOver={importDocSearchModalIfNeeded}
				onClick={openModal}
				ref={searchButtonRef}
				translations={props.translations?.button ?? translations.button}
			/>

			{isOpen &&
				DocSearchModal &&
				searchContainer.current &&
				createPortal(
					<DocSearchModal
						onClose={closeModal}
						initialScrollY={window.scrollY}
						initialQuery={initialQuery}
						navigator={navigator}
						transformItems={transformItems}
						hitComponent={Hit}
						transformSearchClient={transformSearchClient}
						{...(props.searchPagePath && {
							resultsFooterComponent,
						})}
						placeholder={translations.placeholder}
						{...props}
						translations={props.translations?.modal ?? translations.modal}
						searchParameters={searchParameters}
					/>,
					searchContainer.current,
				)}
		</>
	);
}
export default function SearchBar() {
	const { siteConfig } = useDocusaurusContext();
	return <DocSearch {...siteConfig.themeConfig.algolia} />;
}