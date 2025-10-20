// Redirect to ngrok.com domain if not already there
// This only runs in production (ngrok.mintlify.dev), not in preview/branch deployments
(function() {
  var hostname = window.location.hostname;
  
  // Skip redirect if already on ngrok.com
  if (hostname === 'ngrok.com') {
    return;
  }
  
  // Only redirect from the main production Mintlify domain
  // Preview deployments have different hostnames and should not redirect
  if (hostname !== 'ngrok.mintlify.dev') {
    return;
  }
  
  // Perform the redirect, preserving the path and search params
  var newUrl = 'https://ngrok.com' + window.location.pathname + window.location.search + window.location.hash;
  window.location.replace(newUrl);
})();
