/**
 * Dynamic Dashboard Link UtmCampaign Parameter Forwarding with Session Persistence
 *
 * Automatically forwards utm_campaign query parameter from the original landing page URL
 * to the Dashboard navigation button and persists it throughout the session.
 *
 */
(function() {
  'use strict';

  // localStorage key for storing utmCampaign
  const STORAGE_KEY = 'utmCampaign';
  const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;
  
  /**
   * Check if current page has a utmCampaign query param and store it in localstorage
   */
  function storeUtmCampaign() {
    const params = new URLSearchParams(window.location.search);
    const utmCampaign = params.get("utm_campaign")
    if (utmCampaign) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ utmCampaign, timestamp: Date.now() }));
      } catch (error) {
        // Silent error handling
      }
    }
  }

  /**
   * Retrieve utmCampaign from localStorage
   * Deletes the value if it's over 1 month old
   * returns string
   */
  function getStoredUtmCampaign() {
    try {
      const { utmCampaign, timestamp } = JSON.parse(localStorage.getItem(STORAGE_KEY))

      if (timestamp) {
        const age = Date.now() - timestamp;
        if (age > ONE_MONTH_MS) {
          localStorage.removeItem(STORAGE_KEY);
          return "";
        }
      }
      return utmCampaign
    } catch (error) {
      return "";
    }
  }

  /**
   * Update the dashboard link href with the utmCampaign from localStorage as a query parameter when someone triggers a click/mouseover/contextmenu event on a dashboard link
   */
  function handleDashboardLinkEvent(event) {
    const link = event.target.closest('li.navbar-link a');
    if (!link || !link.href || !link.href.includes('dashboard.ngrok.com')) {
      return;
    }

    storeUtmCampaign()

    const storedUtmCampaign = getStoredUtmCampaign();
    if (!storedUtmCampaign) {
      return;
    }

    try {
      // Parse the current dashboard URL
      const url = new URL(link.href);
      url.searchParams.set('utm_campaign', storedUtmCampaign);
      link.href = url.toString();
    } catch (error) {
      // Silent error handling
    }
  }

  /**
   * Initialize: Run on DOM ready
   */
  function init() {
    if (window.utmForwarderInitialized) {
      return;
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        storeUtmCampaign()
      });
    } else {
      storeUtmCampaign()
    }

    document.addEventListener('click', handleDashboardLinkEvent, true);
    document.addEventListener('mouseover', handleDashboardLinkEvent, true);
    document.addEventListener('contextmenu', handleDashboardLinkEvent, true);
  }

  init();
  window.utmForwarderInitialized = true;
})();
  