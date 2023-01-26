
// Just for exact match
// if(window.location.pathname == "/docs/ngrok-link") window.location.href = `${window.location.origin}/docs/cloud-edge`

//if you want handle any instance with paths.  
if(window.location.pathname.includes("/docs/ngrok-link")) {
    var regex = /\/docs\/ngrok-link/g;
    var replacement = "/docs/cloud-edge";
    var currentHref = window.location.href
    var newLocation = currentHref.replace(regex, replacement);
    window.location.href = newLocation
}
