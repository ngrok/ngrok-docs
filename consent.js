/**
 * Cookie consent for the docs.
 *
 * A plain-JavaScript port of `@pkg/ui/consent` in ngrok-private/frontend
 * (PR #3973) for a site with no React tree and no bundler. Mintlify runs
 * every root `.js` file on every page after the page becomes interactive.
 * Three parts, in source order:
 *
 * 1. The headless consent client. It looks the visitor's region up through
 *    `/ip`, then it resolves the jurisdiction and the purposes from the Ketch
 *    property config. It reads and writes the permit through `consent/get`
 *    and `consent/update`. It keeps the `_swb` and `_ketch_consent_v1_`
 *    cookies the GTM consent template reads, and it hands each decision to
 *    Google Tag Manager. The boot writes, the GPC plugin, the freshness
 *    rules, the environment match, and the cookie domain walk follow the
 *    Ketch SDK.
 * 2. The GTM loader. gtm.js loads at the first idle period after `load` and
 *    after the consent decision, so `docs.json` carries no `integrations.gtm`.
 * 3. The banner: the DOM of the React `ConsentBanner`, styled by `style.css`.
 *
 * Each section names the frontend file it ports. Change them together.
 */
(function () {
  "use strict";

  /** The Ketch property every ngrok.com site shares. */
  const PROPERTY_CODE = "ngrok_ketch_tag";
  const GTM_ID = "GTM-P4F37ZW";
  const PREFERENCES_HREF = "https://ngrok.com/privacy-preferences";

  // One client per page. A second run of this file must not boot a second
  // client or mount a second banner.
  if (window.__ngrokConsent__ != null) {
    return;
  }

  function isRecord(value) {
    return typeof value === "object" && value != null && !Array.isArray(value);
  }

  function readNumber(value) {
    return typeof value === "number" && Number.isFinite(value) ? value : null;
  }

  /* --------------------------------------------------------------------------
   * packages/ui/src/consent/consent-config.ts
   * ----------------------------------------------------------------------- */

  /** The Ketch organization every request names. */
  const ORGANIZATION_CODE = "ngrok";

  /** The Ketch API base, the `services.shoreline` value from the property config. */
  const API_BASE = "https://global.ketchcdn.com/web/v3";

  /** The managed identity cookie. Ketch keys its Audit Log on this value. */
  const IDENTITY_COOKIE_NAME = "_swb";

  /** The public consent cookie the GTM template reads before any tag fires. */
  const CONSENT_COOKIE_NAME = "_ketch_consent_v1_";

  /** The cookie that remembers the last Global Privacy Control signal the client saw. */
  const GPC_COOKIE_NAME = "gpcsignal";

  /** localStorage key for the decision metadata the freshness rules compare. */
  const DECISION_STORAGE_KEY = "ngrok_consent_decision";

  /** localStorage key for the cached purposes, with the jurisdiction and version they belong to. */
  const PURPOSES_STORAGE_KEY = "ngrok_consent_purposes";

  /** localStorage key for an update body the server has not accepted yet. */
  const PENDING_UPDATE_STORAGE_KEY = "ngrok_consent_pending_update";

  /** 400 days: the Ketch SDK's cookie TTL, and the longest a browser keeps a cookie. */
  const IDENTITY_COOKIE_TTL_SECONDS = 400 * 24 * 60 * 60;

  /** 30 days, as the Ketch SDK's GPC plugin writes it. */
  const GPC_COOKIE_TTL_SECONDS = 30 * 24 * 60 * 60;

  /** How long a server read stays fresh, the Ketch SDK's own `CACHED_CONSENT_TTL`. */
  const SERVER_READ_TTL_SECONDS = 300;

  /** The only jurisdiction the GPC signal applies to. The property's `gpc` plugin sets this. */
  const GPC_JURISDICTION_CODE = "default";

  /** The purposes the GPC signal denies when the purpose allows an opt-out. */
  const GPC_PURPOSE_CODES = ["analytics", "behavioral_advertising"];

  /** The `window` event the client dispatches after each decision. The GTM loader waits on it. */
  const CONSENT_DECISION_EVENT = "consentdecision";

  /** The identity space of the property. Each property owns one, named after it. */
  const IDENTITY_SPACE_CODE = `swb_${PROPERTY_CODE}`;

  /**
   * The environments of the property, copied from its `boot.js`. `pattern`
   * is the regex source, base64-decoded. The frontend repo's
   * `check-consent-environments` workflow watches the same list for drift.
   */
  const ENVIRONMENTS = [
    { code: "production", pattern: "ngrok.com" },
    { code: "ai", pattern: "ngrok.ai" },
  ];

  /**
   * Pick the environment code for a page URL the way the Ketch SDK does. The
   * longest pattern that matches `href` wins. `production` is the fallback,
   * so a preview deploy on another host records against production.
   */
  function resolveEnvironment(href) {
    let matched = null;
    for (const environment of ENVIRONMENTS) {
      if (!new RegExp(environment.pattern).test(href)) {
        continue;
      }
      if (matched == null || environment.pattern.length > matched.pattern.length) {
        matched = environment;
      }
    }
    return matched != null ? matched.code : "production";
  }

  /* --------------------------------------------------------------------------
   * packages/ui/src/consent/consent-cookies.ts
   * ----------------------------------------------------------------------- */

  /** Decode a percent-encoded cookie value. A malformed value comes back raw. */
  function decodeCookieValue(value) {
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  }

  /** Read one cookie from `document.cookie`. Returns `null` when the cookie is absent. */
  function readCookie(name) {
    for (const pair of document.cookie.split(";")) {
      const separator = pair.indexOf("=");
      if (separator === -1) {
        continue;
      }
      if (pair.slice(0, separator).trim() === name) {
        return decodeCookieValue(pair.slice(separator + 1).trim());
      }
    }
    return null;
  }

  /**
   * Write a cookie the way the Ketch SDK does: `path=/; SameSite=None; Secure`,
   * on the widest domain the browser accepts. The walk starts at the two-label
   * suffix and moves up one label at a time until a write sticks. So
   * `ngrok.com/docs` gets `.ngrok.com`, and a preview host falls through the
   * public suffix to a host-only cookie.
   */
  function writeCookie(name, value, maxAgeSeconds) {
    // A copy of the value at another scope would pass the read-back below, so clear every scope first.
    deleteCookie(name);
    const expires = new Date(Date.now() + maxAgeSeconds * 1000).toUTCString();
    const base = `${name}=${encodeURIComponent(value)}; path=/; expires=${expires}; SameSite=None; Secure`;
    const labels = location.hostname.split(".");
    for (let count = 2; count <= labels.length; count += 1) {
      document.cookie = `${base}; domain=${labels.slice(-count).join(".")}`;
      if (readCookie(name) === value) {
        return;
      }
    }
    document.cookie = base;
  }

  /**
   * Delete a cookie on every domain the write walk could have used, plus the
   * host-only copy. A browser deletes a cookie only when `domain` matches.
   */
  function deleteCookie(name) {
    const base = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`;
    const labels = location.hostname.split(".");
    for (let count = 2; count <= labels.length; count += 1) {
      document.cookie = `${base}; domain=${labels.slice(-count).join(".")}`;
    }
    document.cookie = base;
  }

  /**
   * Serialize decided purposes into the `_ketch_consent_v1_` value: base64
   * JSON of `{ [code]: { status, canonicalPurposes } }`. The GTM template maps
   * `canonicalPurposes` to Google consent types.
   */
  function encodeConsentCookie(allowed, purposes) {
    const entries = {};
    for (const purpose of purposes) {
      const status = allowed[purpose.code];
      if (status == null) {
        continue;
      }
      entries[purpose.code] = {
        status: status ? "granted" : "denied",
        canonicalPurposes: purpose.canonicalPurposeCodes,
      };
    }
    return btoa(JSON.stringify(entries));
  }

  /**
   * Parse a `_ketch_consent_v1_` value back into allowed flags per purpose
   * code. Returns `null` when the value is not the base64 JSON the SDK writes.
   */
  function decodeConsentCookie(value) {
    let parsed;
    try {
      parsed = JSON.parse(atob(value));
    } catch {
      return null;
    }
    if (!isRecord(parsed)) {
      return null;
    }
    const allowed = {};
    for (const [code, entry] of Object.entries(parsed)) {
      if (!isRecord(entry) || (entry.status !== "granted" && entry.status !== "denied")) {
        return null;
      }
      allowed[code] = entry.status === "granted";
    }
    return allowed;
  }

  /** Read a localStorage key. Returns `null` when the key is absent or storage throws. */
  function readStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  /** Write a localStorage key, or remove it when `value` is `null`. The cookie is the record; storage is a cache. */
  function writeStorage(key, value) {
    try {
      if (value == null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch {
      // A blocked write loses nothing.
    }
  }

  /* --------------------------------------------------------------------------
   * packages/ui/src/consent/consent-gtm.ts
   * ----------------------------------------------------------------------- */

  /**
   * The Google consent types each canonical purpose maps to, copied from the
   * Ketch GTM consent template. ngrok has no `personalization` purpose.
   */
  const GOOGLE_CONSENT_TYPES_BY_CANONICAL_PURPOSE = {
    analytics: ["analytics_storage"],
    behavioral_advertising: ["ad_storage", "ad_user_data"],
    essential_services: ["functionality_storage", "security_storage"],
    personalization: ["personalization_storage", "ad_personalization"],
  };

  /**
   * Map decided purposes to Google consent types through each purpose's
   * canonical codes. A purpose with no canonical code, like `functional`,
   * maps to nothing. A type two purposes share is granted when either is, as
   * the SDK merges it.
   */
  function toGoogleConsentUpdate(allowed, purposes) {
    const update = {};
    for (const purpose of purposes) {
      const status = allowed[purpose.code];
      if (status == null) {
        continue;
      }
      for (const canonicalCode of purpose.canonicalPurposeCodes) {
        for (const consentType of GOOGLE_CONSENT_TYPES_BY_CANONICAL_PURPOSE[canonicalCode] || []) {
          update[consentType] = update[consentType] === true || status;
        }
      }
    }
    return update;
  }

  /**
   * Hand a decision to Google Tag Manager the way the Ketch SDK does. Each
   * `gtmConsentListeners` callback gets the purpose codes and the Google
   * consent types together. The dataLayer gets `ketchPermitChanged` with the
   * purpose codes. A listener that throws does not stop the others.
   */
  function publishConsentToGtm(allowed, purposes) {
    const update = { ...allowed, ...toGoogleConsentUpdate(allowed, purposes) };
    for (const listener of window.gtmConsentListeners || []) {
      try {
        listener({ purposes: update });
      } catch (error) {
        console.error("[consent] a GTM consent listener threw", error);
      }
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "ketchPermitChanged", ...allowed });
  }

  /* --------------------------------------------------------------------------
   * packages/ui/src/consent/consent-api.ts
   * ----------------------------------------------------------------------- */

  /** Fetch JSON from the Ketch API. Throws on a non-2xx status. */
  async function fetchJson(url, init) {
    const response = await fetch(url, init);
    if (!response.ok) {
      throw new Error(`[consent] ${(init && init.method) || "GET"} ${url} returned ${response.status}`);
    }
    return response.json();
  }

  /**
   * Fetch the un-pathed config for one region. Fastly caches the response per
   * URL for seven days. Without the region in the URL, a POP serves every
   * visitor the jurisdiction of its first visitor. `cache: "no-store"` keeps
   * the browser from holding one config version that long.
   */
  function fetchConfig(include, region) {
    const url = `${API_BASE}/config/${ORGANIZATION_CODE}/${PROPERTY_CODE}/config.json`;
    return fetchJson(`${url}?include=${include}&region=${encodeURIComponent(region)}`, { cache: "no-store" });
  }

  /**
   * The visitor's region as the SDK builds it from `/ip`. A US or Canadian
   * visitor gets `US-CA`, everyone else the country code, and `US` when the
   * lookup names no country. `/ip` is `private`: the browser caches it for 20
   * minutes and no shared cache holds it. Throws when the lookup has no location.
   */
  async function fetchRegion() {
    const body = await fetchJson(`${API_BASE}/ip`);
    if (!isRecord(body) || !isRecord(body.location)) {
      throw new Error("[consent] ip response is malformed");
    }
    const { countryCode, regionCode } = body.location;
    if ((countryCode === "US" || countryCode === "CA") && typeof regionCode === "string" && regionCode !== "") {
      return `${countryCode}-${regionCode}`;
    }
    return typeof countryCode === "string" && countryCode !== "" ? countryCode : "US";
  }

  /**
   * Narrow one purpose from the purposes endpoint. `requiresOptIn` and
   * `allowsOptOut` are absent when false, and `canonicalPurposeCodes` is
   * absent when empty. Throws on a purpose with no `code` or `legalBasisCode`.
   */
  function parsePurpose(value) {
    if (!isRecord(value) || typeof value.code !== "string" || typeof value.legalBasisCode !== "string") {
      throw new Error("[consent] purposes response has a purpose without a code");
    }
    const canonicalPurposeCodes = Array.isArray(value.canonicalPurposeCodes)
      ? value.canonicalPurposeCodes.filter((code) => typeof code === "string")
      : [];
    return {
      code: value.code,
      legalBasisCode: value.legalBasisCode,
      requiresOptIn: value.requiresOptIn === true,
      allowsOptOut: value.allowsOptOut === true,
      canonicalPurposeCodes,
    };
  }

  /** The Ketch v3 API. Every call throws on a network failure or a malformed body. */
  const api = {
    /** The jurisdiction and config version for the visitor's region, plus the region the purposes fetch reuses. */
    async fetchJurisdiction() {
      const region = await fetchRegion();
      const body = await fetchConfig("jurisdiction,deployment", region);
      if (!isRecord(body) || !isRecord(body.jurisdiction) || !isRecord(body.deployment)) {
        throw new Error("[consent] jurisdiction response is malformed");
      }
      const jurisdictionCode = body.jurisdiction.code;
      const version = readNumber(body.deployment.version);
      if (typeof jurisdictionCode !== "string" || version == null) {
        throw new Error("[consent] jurisdiction response is malformed");
      }
      return {
        jurisdictionCode,
        version,
        region,
        /** Permits collected before this unix time need consent again, or `null`. */
        reconsentRequiredBefore: readNumber(body.deployment.reconsentRequiredBefore),
      };
    },

    async fetchPurposes(region) {
      const body = await fetchConfig("purposes", region);
      if (!isRecord(body) || !Array.isArray(body.purposes)) {
        throw new Error("[consent] purposes response is malformed");
      }
      return body.purposes.map(parsePurpose);
    },

    async getConsent(context, purposes) {
      const requestPurposes = {};
      for (const purpose of purposes) {
        requestPurposes[purpose.code] = { legalBasisCode: purpose.legalBasisCode };
      }
      const body = await fetchJson(`${API_BASE}/consent/${ORGANIZATION_CODE}/get?includePurposeInfo=true`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          organizationCode: ORGANIZATION_CODE,
          propertyCode: PROPERTY_CODE,
          environmentCode: context.environmentCode,
          jurisdictionCode: context.jurisdictionCode,
          identities: { [IDENTITY_SPACE_CODE]: context.identity },
          purposes: requestPurposes,
          isGpcEnabled: context.isGpcEnabled,
        }),
      });
      if (!isRecord(body)) {
        throw new Error("[consent] get response is malformed");
      }
      const permit = {
        purposes: {},
        collectedAt: readNumber(body.collectedAt),
        showAfter: readNumber(body.showAfter),
      };
      const purposeInfo = isRecord(body.purposeInfo) ? body.purposeInfo : {};
      for (const [code, info] of Object.entries(purposeInfo)) {
        if (!isRecord(info)) {
          continue;
        }
        permit.purposes[code] = {
          allowed: info.allowed === "true" || info.allowed === true,
          isRecorded: info.isRecorded === true,
        };
      }
      return permit;
    },

    async updateConsent(body) {
      const response = await fetch(`${API_BASE}/consent/${ORGANIZATION_CODE}/update`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
        // A rejection on the banner is often the last thing before a navigation.
        keepalive: true,
      });
      if (!response.ok) {
        throw new Error(`[consent] update returned ${response.status}`);
      }
    },
  };

  /* --------------------------------------------------------------------------
   * packages/ui/src/consent/consent-client.ts
   * ----------------------------------------------------------------------- */

  function parseStoredDecision(raw) {
    if (raw == null) {
      return null;
    }
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return null;
    }
    if (
      !isRecord(parsed) ||
      !isRecord(parsed.purposes) ||
      typeof parsed.jurisdictionCode !== "string" ||
      typeof parsed.version !== "number" ||
      typeof parsed.identity !== "string" ||
      typeof parsed.collectedAt !== "number" ||
      typeof parsed.fetchedAt !== "number"
    ) {
      return null;
    }
    const purposes = {};
    for (const [code, allowed] of Object.entries(parsed.purposes)) {
      if (typeof allowed === "boolean") {
        purposes[code] = allowed;
      }
    }
    return {
      purposes,
      jurisdictionCode: parsed.jurisdictionCode,
      version: parsed.version,
      identity: parsed.identity,
      collectedAt: parsed.collectedAt,
      showAfter: typeof parsed.showAfter === "number" ? parsed.showAfter : null,
      fetchedAt: parsed.fetchedAt,
    };
  }

  function parseStoredPurposes(raw) {
    if (raw == null) {
      return null;
    }
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return null;
    }
    if (
      !isRecord(parsed) ||
      typeof parsed.jurisdictionCode !== "string" ||
      typeof parsed.version !== "number" ||
      !Array.isArray(parsed.purposes)
    ) {
      return null;
    }
    try {
      return {
        jurisdictionCode: parsed.jurisdictionCode,
        version: parsed.version,
        purposes: parsed.purposes.map(parsePurpose),
      };
    } catch {
      return null;
    }
  }

  /**
   * The stored update, with the body as it was sent, or `null` when the value
   * is not one the client wrote. The guard covers every field the client
   * reads back before the retry, so a tampered or stale value cannot fail the
   * boot.
   */
  function parseStoredUpdate(raw) {
    if (raw == null) {
      return null;
    }
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return null;
    }
    if (
      !isRecord(parsed) ||
      typeof parsed.jurisdictionCode !== "string" ||
      !isRecord(parsed.identities) ||
      !isRecord(parsed.purposes) ||
      !Object.values(parsed.purposes).every(
        (entry) => isRecord(entry) && (entry.allowed === "true" || entry.allowed === "false"),
      )
    ) {
      return null;
    }
    return { serialized: raw, body: parsed };
  }

  /** `true` when the visitor can never turn the purpose off: no opt-out and no opt-in. */
  function isLockedPurpose(purpose) {
    return !purpose.allowsOptOut && !purpose.requiresOptIn;
  }

  /** `true` when two decisions allow the same purposes: the same codes, each with the same flag. */
  function sameAllowed(left, right) {
    const keys = Object.keys(left);
    return keys.length === Object.keys(right).length && keys.every((key) => left[key] === right[key]);
  }

  /** The raw Global Privacy Control signal. The SDK sends it on every `get` and `update`, in every jurisdiction. */
  function gpcSignal() {
    return navigator.globalPrivacyControl === true;
  }

  /**
   * Create the consent client. `boot()` starts the load; the banner subscribes
   * to the snapshot and calls the actions. The snapshot is
   * `{ status: "unresolved" }`, `{ status: "prompting", … }`,
   * `{ status: "ready", decision, pendingWrite, … }`, or `{ status: "error" }`.
   */
  function createConsentClient(environmentCode) {
    const now = () => Math.floor(Date.now() / 1000);
    let snapshot = { status: "unresolved" };
    let context = null;
    let bootPromise = null;
    let sendingUpdate = false;
    /** The update the server has not accepted yet. localStorage mirrors it for the next load. */
    let pendingUpdate = null;
    /** The source the next write carries after Ketch asked for the decision again. */
    let sourceOverride = null;
    /** Bumps on each write, so the client discards a server read that lands afterwards. */
    let actionSequence = 0;
    const listeners = new Set();

    function setSnapshot(next) {
      snapshot = next;
      for (const listener of listeners) {
        listener();
      }
    }

    /** `true` while the `gpc` plugin applies: the signal is on and the jurisdiction is the one it covers. */
    function isGpcEnabled(resolved) {
      return resolved.jurisdictionCode === GPC_JURISDICTION_CODE && gpcSignal();
    }

    function setPrompting(resolved) {
      setSnapshot({
        status: "prompting",
        jurisdictionCode: resolved.jurisdictionCode,
        purposes: resolved.purposes,
        gpcEnabled: isGpcEnabled(resolved),
      });
    }

    function setReady(resolved, decision, pendingWrite) {
      setSnapshot({
        status: "ready",
        jurisdictionCode: resolved.jurisdictionCode,
        purposes: resolved.purposes,
        decision,
        pendingWrite,
        gpcEnabled: isGpcEnabled(resolved),
      });
    }

    function fail(stage, error) {
      console.error(`[consent] ${stage} failed`, error);
      setSnapshot({ status: "error", message: `[consent] ${stage} failed` });
    }

    /**
     * Drop the local copy of the permit. The server said the visitor has no
     * permit, so a stale cookie must not feed GTM old grants while the banner
     * asks again.
     */
    function forgetDecision() {
      deleteCookie(CONSENT_COOKIE_NAME);
      writeStorage(CONSENT_COOKIE_NAME, null);
      writeStorage(DECISION_STORAGE_KEY, null);
    }

    function persistDecision(resolved, decision) {
      const encoded = encodeConsentCookie(decision.purposes, resolved.purposes);
      writeCookie(CONSENT_COOKIE_NAME, encoded, IDENTITY_COOKIE_TTL_SECONDS);
      // The GTM template falls back to this localStorage copy when the cookie is missing.
      writeStorage(CONSENT_COOKIE_NAME, encoded);
      writeStorage(DECISION_STORAGE_KEY, JSON.stringify(decision));
    }

    function publish(resolved, decision) {
      publishConsentToGtm(decision.purposes, resolved.purposes);
      window.dispatchEvent(new Event(CONSENT_DECISION_EVENT));
    }

    function storePendingUpdate(next) {
      pendingUpdate = next;
      writeStorage(PENDING_UPDATE_STORAGE_KEY, next != null ? next.serialized : null);
    }

    async function sendUpdate(pending) {
      if (sendingUpdate) {
        return;
      }
      sendingUpdate = true;
      try {
        await api.updateConsent(pending.body);
        // A newer decision may have replaced the pending update while this one was in flight.
        if (pendingUpdate != null && pendingUpdate.serialized === pending.serialized) {
          storePendingUpdate(null);
          if (snapshot.status === "ready" && snapshot.pendingWrite) {
            setSnapshot({ ...snapshot, pendingWrite: false });
          }
        }
      } catch (error) {
        console.error("[consent] update failed; it retries on the next load", error);
        if (snapshot.status === "ready" && !snapshot.pendingWrite) {
          setSnapshot({ ...snapshot, pendingWrite: true });
        }
      } finally {
        sendingUpdate = false;
        // A newer decision replaced the pending update during the flight. Send it now, not on the next visit.
        if (pendingUpdate != null && pendingUpdate.serialized !== pending.serialized) {
          void sendUpdate(pendingUpdate);
        }
      }
    }

    function retryPendingUpdate() {
      if (pendingUpdate != null) {
        void sendUpdate(pendingUpdate);
      }
    }

    /** `true` when the pending update is this visitor's, in this jurisdiction. It is then newer than any server permit. */
    function pendingUpdateBelongs(resolved, identity) {
      return (
        pendingUpdate != null &&
        pendingUpdate.body.identities[IDENTITY_SPACE_CODE] === identity &&
        pendingUpdate.body.jurisdictionCode === resolved.jurisdictionCode
      );
    }

    /**
     * Record a decision: keep or mint the identity, persist the cookie and
     * the metadata, and queue the server write. The snapshot is the caller's.
     */
    function record(resolved, allowed, source) {
      actionSequence += 1;
      const identity = readCookie(IDENTITY_COOKIE_NAME) || crypto.randomUUID();
      writeCookie(IDENTITY_COOKIE_NAME, identity, IDENTITY_COOKIE_TTL_SECONDS);
      const collectedAt = now();
      const decision = {
        purposes: allowed,
        jurisdictionCode: resolved.jurisdictionCode,
        version: resolved.version,
        identity,
        collectedAt,
        showAfter: null,
        fetchedAt: collectedAt,
      };
      persistDecision(resolved, decision);

      const purposes = {};
      for (const purpose of resolved.purposes) {
        const status = allowed[purpose.code];
        if (status != null) {
          purposes[purpose.code] = { allowed: status ? "true" : "false", legalBasisCode: purpose.legalBasisCode };
        }
      }
      const body = {
        organizationCode: ORGANIZATION_CODE,
        propertyCode: PROPERTY_CODE,
        environmentCode,
        jurisdictionCode: resolved.jurisdictionCode,
        identities: { [IDENTITY_SPACE_CODE]: identity },
        purposes,
        collectedAt,
        isGpcEnabled: gpcSignal(),
        // The SDK tags the first write after a re-collection prompt with the reason for the prompt.
        context: { source: sourceOverride || source },
      };
      sourceOverride = null;
      const pending = { serialized: JSON.stringify(body), body };
      storePendingUpdate(pending);
      void sendUpdate(pending);
      return decision;
    }

    /** The visitor's own action: record it, hide the banner, and open the GTM gate. */
    function commit(resolved, allowed, source) {
      const decision = record(resolved, allowed, source);
      setReady(resolved, decision, false);
      publish(resolved, decision);
    }

    /**
     * Whether the visitor must decide, as the SDK's `_calculateNeedsConsent`
     * reads a permit. Consent is needed for a purpose with no recorded value,
     * a passed `showAfter`, or a permit older than `reconsentRequiredBefore`.
     * The last two set the source of the next write.
     */
    function needsConsent(resolved, recorded) {
      if (recorded == null || resolved.purposes.some((purpose) => recorded.purposes[purpose.code] == null)) {
        return true;
      }
      if (recorded.showAfter != null && now() >= recorded.showAfter) {
        sourceOverride = "recollectAfterInterval";
        return true;
      }
      const before = resolved.reconsentRequiredBefore;
      if (before != null && before > 0 && recorded.collectedAt < before) {
        sourceOverride = "recollectAfterDate";
        return true;
      }
      return false;
    }

    /**
     * The SDK's provisional consent, run on every load. The `gpc` plugin runs
     * first: in its jurisdiction, a newly true Global Privacy Control signal
     * denies each mapped purpose that allows an opt-out. Then every undecided
     * purpose that needs no opt-in is allowed, the `legalBasisDefault` write.
     * Returns the decision it recorded, or `null` when nothing changed.
     */
    function recordProvisional(resolved, recorded) {
      const allowed = { ...recorded };
      let source = "legalBasisDefault";
      let changed = false;
      if (resolved.jurisdictionCode === GPC_JURISDICTION_CODE) {
        const signal = gpcSignal();
        const remembered = readCookie(GPC_COOKIE_NAME) === "true";
        if (remembered !== signal) {
          writeCookie(GPC_COOKIE_NAME, String(signal), GPC_COOKIE_TTL_SECONDS);
        }
        if (signal && !remembered) {
          for (const code of GPC_PURPOSE_CODES) {
            const purpose = resolved.purposes.find((candidate) => candidate.code === code);
            if (purpose && purpose.allowsOptOut) {
              allowed[code] = false;
              changed = true;
              source = "plugins.gpc";
            }
          }
        }
      }
      for (const purpose of resolved.purposes) {
        if (allowed[purpose.code] == null && !purpose.requiresOptIn) {
          allowed[purpose.code] = true;
          changed = true;
        }
      }
      return changed ? record(resolved, allowed, source) : null;
    }

    /**
     * Settle the boot from the recorded permit, as the SDK's `_getConsent`
     * does. The banner shows when the permit needs consent, and the
     * provisional consent is recorded either way. A provisional write closes
     * no banner and opens no GTM gate. The next load finds the permit recorded
     * and skips the banner.
     */
    function settle(resolved, recorded, pendingWrite) {
      const needs = needsConsent(resolved, recorded);
      const provisional = recordProvisional(resolved, recorded != null ? recorded.purposes : {});
      if (needs) {
        setPrompting(resolved);
        return;
      }
      const decision = provisional || recorded;
      if (decision == null) {
        return;
      }
      setReady(resolved, decision, provisional == null && pendingWrite);
      publish(resolved, decision);
    }

    async function loadPurposes(jurisdiction) {
      const cached = parseStoredPurposes(readStorage(PURPOSES_STORAGE_KEY));
      if (
        cached != null &&
        cached.jurisdictionCode === jurisdiction.jurisdictionCode &&
        cached.version === jurisdiction.version
      ) {
        return cached.purposes;
      }
      const purposes = await api.fetchPurposes(jurisdiction.region);
      writeStorage(
        PURPOSES_STORAGE_KEY,
        JSON.stringify({ jurisdictionCode: jurisdiction.jurisdictionCode, version: jurisdiction.version, purposes }),
      );
      return purposes;
    }

    function needsServerRead(resolved, identity, stored, cookieAllowed) {
      if (stored.identity !== identity) {
        return true;
      }
      if (stored.jurisdictionCode !== resolved.jurisdictionCode || stored.version !== resolved.version) {
        return true;
      }
      if (stored.showAfter != null && now() >= stored.showAfter) {
        return true;
      }
      if (now() - stored.fetchedAt > SERVER_READ_TTL_SECONDS) {
        return true;
      }
      return !sameAllowed(cookieAllowed, stored.purposes);
    }

    async function readServerPermit(resolved, identity) {
      const sequence = actionSequence;
      let permit;
      try {
        permit = await api.getConsent(
          {
            environmentCode,
            jurisdictionCode: resolved.jurisdictionCode,
            identity,
            isGpcEnabled: gpcSignal(),
          },
          resolved.purposes,
        );
      } catch (error) {
        // A repeat prompt is safer than a silent grant. Nothing is written: a default write could bury a real permit.
        console.error("[consent] permit read failed; asking again", error);
        if (sequence === actionSequence) {
          setPrompting(resolved);
        }
        return;
      }
      if (sequence !== actionSequence) {
        return;
      }
      const recorded = {};
      for (const purpose of resolved.purposes) {
        const entry = permit.purposes[purpose.code];
        if (entry && entry.isRecorded === true) {
          recorded[purpose.code] = entry.allowed;
        }
      }
      // An update this browser could not deliver is newer than anything the server holds.
      if (pendingUpdateBelongs(resolved, identity)) {
        for (const [code, entry] of Object.entries(pendingUpdate.body.purposes)) {
          recorded[code] = entry.allowed === "true";
        }
      }
      if (Object.keys(recorded).length === 0) {
        forgetDecision();
        settle(resolved, null, false);
        return;
      }
      const decision = {
        purposes: recorded,
        jurisdictionCode: resolved.jurisdictionCode,
        version: resolved.version,
        identity,
        collectedAt: permit.collectedAt != null ? permit.collectedAt : now(),
        showAfter: permit.showAfter,
        fetchedAt: now(),
      };
      persistDecision(resolved, decision);
      settle(resolved, decision, pendingUpdate != null);
    }

    /**
     * Re-read the cookie after another tab or a restored page may have
     * changed it. A cookie write fires no `storage` event, so this runs on
     * `pageshow` and on `visibilitychange` to visible. Before a decision, the
     * cookie counts only with a stored decision that passes the boot's
     * freshness rules. A permit the server rejected, or could not confirm,
     * keeps prompting.
     */
    function syncFromCookie() {
      if (context == null) {
        return;
      }
      const cookie = readCookie(CONSENT_COOKIE_NAME);
      const allowed = cookie == null ? null : decodeConsentCookie(cookie);
      if (allowed == null) {
        return;
      }
      const identity = readCookie(IDENTITY_COOKIE_NAME);
      const stored = parseStoredDecision(readStorage(DECISION_STORAGE_KEY));
      const ownStored = identity != null && stored != null && stored.identity === identity ? stored : null;
      if (snapshot.status === "ready") {
        if (sameAllowed(allowed, snapshot.decision.purposes)) {
          return;
        }
        const decision = { ...(ownStored || snapshot.decision), purposes: allowed };
        setReady(context, decision, snapshot.pendingWrite);
        publish(context, decision);
        return;
      }
      if (identity == null || ownStored == null || needsServerRead(context, identity, ownStored, allowed)) {
        return;
      }
      const decision = { ...ownStored, purposes: allowed };
      if (needsConsent(context, decision)) {
        return;
      }
      setReady(context, decision, false);
      publish(context, decision);
    }

    function installLifecycleListeners() {
      window.addEventListener("pageshow", syncFromCookie);
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          syncFromCookie();
          retryPendingUpdate();
        }
      });
    }

    async function run() {
      installLifecycleListeners();
      pendingUpdate = parseStoredUpdate(readStorage(PENDING_UPDATE_STORAGE_KEY));
      let jurisdiction;
      try {
        jurisdiction = await api.fetchJurisdiction();
      } catch (error) {
        fail("jurisdiction fetch", error);
        return;
      }
      let purposes;
      try {
        purposes = await loadPurposes(jurisdiction);
      } catch (error) {
        fail("purposes fetch", error);
        return;
      }
      const resolved = {
        jurisdictionCode: jurisdiction.jurisdictionCode,
        version: jurisdiction.version,
        reconsentRequiredBefore: jurisdiction.reconsentRequiredBefore,
        purposes,
      };
      context = resolved;

      const identity = readCookie(IDENTITY_COOKIE_NAME);
      const stored = parseStoredDecision(readStorage(DECISION_STORAGE_KEY));
      const cookie = readCookie(CONSENT_COOKIE_NAME);
      const cookieAllowed = cookie == null ? null : decodeConsentCookie(cookie);

      if (identity == null) {
        // No identity means no server permit, so there is nothing to read.
        settle(resolved, null, false);
      } else if (stored == null || cookieAllowed == null) {
        await readServerPermit(resolved, identity);
      } else if (
        pendingUpdateBelongs(resolved, identity) &&
        stored.identity === identity &&
        sameAllowed(cookieAllowed, stored.purposes)
      ) {
        // The server has not accepted the local decision yet, so a read would answer with an older one.
        settle(resolved, stored, true);
      } else if (needsServerRead(resolved, identity, stored, cookieAllowed)) {
        await readServerPermit(resolved, identity);
      } else {
        settle(resolved, stored, false);
      }
      retryPendingUpdate();
    }

    function act(callback) {
      if (context == null) {
        console.error("[consent] an action ran before the client resolved");
        return;
      }
      callback(context);
    }

    return {
      getSnapshot: () => snapshot,
      subscribe(listener) {
        listeners.add(listener);
        return () => {
          listeners.delete(listener);
        };
      },
      /** Start the load. Runs once; later calls return the same promise. */
      boot() {
        if (bootPromise == null) {
          bootPromise = run();
        }
        return bootPromise;
      },
      acceptAll(source) {
        act((resolved) => {
          const allowed = {};
          for (const purpose of resolved.purposes) {
            allowed[purpose.code] = true;
          }
          commit(resolved, allowed, source);
        });
      },
      rejectAll(source) {
        act((resolved) => {
          const allowed = {};
          for (const purpose of resolved.purposes) {
            allowed[purpose.code] = isLockedPurpose(purpose);
          }
          commit(resolved, allowed, source);
        });
      },
    };
  }

  /* --------------------------------------------------------------------------
   * packages/ui/src/google-tag-manager-init.ts
   * ----------------------------------------------------------------------- */

  /**
   * Set up the dataLayer buffer, then load gtm.js at the first idle period
   * after two gates open. The gates are the `load` event and
   * `consentDecisionEvent` on `window`. gtm.js and the tags it fires then
   * start after every eager resource has loaded. They also start after the
   * banner tap, a new visitor's first interaction. When the client fails or
   * stays silent for 10 s after `load`, the gate opens anyway. This runs
   * before the client boots, so no decision precedes the listener.
   */
  function loadGtmBehindConsent(gtmId, consentDecisionEvent) {
    window.dataLayer = window.dataLayer || [];

    /** Milliseconds after `load` to wait for the consent decision before loading anyway. */
    const CONSENT_FALLBACK_MS = 10000;

    let isDocumentLoaded = document.readyState === "complete";
    let isConsentSettled = false;
    let isScheduled = false;
    let fallbackTimer;

    /** Creates the gtm.js script element and appends it to <head>. Runs at most once. */
    function loadGtm() {
      if (window.__gtm_loaded__) {
        return;
      }
      window.__gtm_loaded__ = true;
      window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(script);
    }

    /** Loads gtm.js at the next idle period, at most 2 s from now. */
    function scheduleLoad() {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(loadGtm, { timeout: 2000 });
      } else {
        setTimeout(loadGtm, 2000);
      }
    }

    function scheduleWhenReady() {
      if (isScheduled || !isDocumentLoaded || !isConsentSettled) {
        return;
      }
      isScheduled = true;
      scheduleLoad();
    }

    function settleConsent() {
      isConsentSettled = true;
      clearTimeout(fallbackTimer);
      scheduleWhenReady();
    }

    function onDocumentLoaded() {
      isDocumentLoaded = true;
      if (!isConsentSettled) {
        fallbackTimer = setTimeout(settleConsent, CONSENT_FALLBACK_MS);
      }
      scheduleWhenReady();
    }

    window.addEventListener(consentDecisionEvent, settleConsent, { once: true });

    if (isDocumentLoaded) {
      onDocumentLoaded();
    } else {
      window.addEventListener("load", onDocumentLoaded, { once: true });
    }
  }

  /* --------------------------------------------------------------------------
   * packages/ui/src/consent/consent-banner.tsx
   *
   * The same DOM as the React banner, so the two look alike. `style.css`
   * carries the styles, with the mantle token values written out.
   * ----------------------------------------------------------------------- */

  /** How long the ease-out runs before the panel hides, in milliseconds. */
  const CLOSE_MS = 200;

  /** Phosphor regular-weight paths, the icons the React banner draws. */
  const ICON_PATHS = {
    gear: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z",
    x: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
    check:
      "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z",
  };

  function icon(name) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 256 256");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("aria-hidden", "true");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", ICON_PATHS[name]);
    svg.append(path);
    return svg;
  }

  /** A mantle `IconButton` with `appearance="ghost" intent="neutral" size="xs"`, as a button or a link. */
  function iconButton(tagName, label, name) {
    const element = document.createElement(tagName);
    if (tagName === "button") {
      element.type = "button";
    }
    element.className = "ngrok-consent-icon-button";
    element.setAttribute("aria-label", label);
    element.append(icon(name));
    return element;
  }

  /**
   * Send a URL that asks the SDK for its preference center to the preferences
   * page. The SDK read `ketch_show=preferences` or `swb_show=preferences`,
   * and older emails and links still carry it. Any other value picked an SDK
   * experience that no longer exists, so it does nothing.
   */
  function redirectLegacyPreferencesUrl(preferencesHref) {
    const params = new URLSearchParams(location.search);
    const requested = params.get("ketch_show") != null ? params.get("ketch_show") : params.get("swb_show");
    if (requested !== "preferences") {
      return;
    }
    location.replace(preferencesHref);
  }

  /**
   * Render the banner: a floating island at the bottom of the viewport, open
   * only while the visitor has no decision. It appends to `document.body`,
   * outside Mintlify's React root, so a client-side navigation leaves it in
   * place. It eases in while the client is `prompting`, eases out otherwise,
   * never takes focus, and ignores Escape.
   */
  function mountConsentBanner(client, preferencesHref) {
    const wrapper = document.createElement("div");
    wrapper.className = "ngrok-consent";

    const panel = document.createElement("div");
    panel.className = "ngrok-consent-panel";
    panel.setAttribute("role", "group");
    panel.setAttribute("aria-label", "Cookie preferences");
    panel.setAttribute("data-state", "closed");
    panel.hidden = true;

    const message = document.createElement("p");
    message.className = "ngrok-consent-message";
    message.textContent = "We use cookies.";

    const preferences = iconButton("a", "View preferences", "gear");
    preferences.href = preferencesHref;
    const reject = iconButton("button", "Reject all", "x");
    reject.addEventListener("click", () => client.rejectAll("banner.rejectAll"));
    const accept = iconButton("button", "Accept all", "check");
    accept.addEventListener("click", () => client.acceptAll("banner.acceptAll"));

    const actions = document.createElement("div");
    actions.className = "ngrok-consent-actions";
    actions.append(preferences, reject, accept);

    panel.append(message, actions);
    wrapper.append(panel);
    document.body.append(wrapper);

    /*
     * The open and close choreography of mantle's `Sandbar`. A closed panel is
     * hidden. An opening panel gets one painted frame at the closed pose, so
     * the transition has a start. A closing panel plays the ease-out, then
     * hides. `presence` is "closed", "opening", "open", or "closing".
     */
    let presence = "closed";
    let frame = 0;
    let hideTimer;

    function open() {
      if (presence === "open" || presence === "opening") {
        return;
      }
      clearTimeout(hideTimer);
      presence = "opening";
      panel.hidden = false;
      panel.inert = false;
      panel.setAttribute("data-state", "closed");
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          presence = "open";
          panel.setAttribute("data-state", "open");
        });
      });
    }

    function close() {
      if (presence === "closed" || presence === "closing") {
        return;
      }
      cancelAnimationFrame(frame);
      presence = "closing";
      panel.inert = true;
      panel.setAttribute("data-state", "closed");
      hideTimer = setTimeout(() => {
        presence = "closed";
        panel.hidden = true;
      }, CLOSE_MS);
    }

    function render() {
      if (client.getSnapshot().status === "prompting") {
        open();
      } else {
        close();
      }
    }

    client.subscribe(render);
    render();
  }

  /* --------------------------------------------------------------------------
   * packages/ui/src/consent/docs-entry.ts
   * ----------------------------------------------------------------------- */

  const client = createConsentClient(resolveEnvironment(location.href));
  window.__ngrokConsent__ = client;
  loadGtmBehindConsent(GTM_ID, CONSENT_DECISION_EVENT);
  redirectLegacyPreferencesUrl(PREFERENCES_HREF);
  if (document.body != null) {
    mountConsentBanner(client, PREFERENCES_HREF);
  } else {
    document.addEventListener("DOMContentLoaded", () => mountConsentBanner(client, PREFERENCES_HREF), { once: true });
  }
  void client.boot();
})();
