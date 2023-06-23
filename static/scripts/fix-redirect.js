const path = window.location.pathname
const goto = (path) => window.location.href = `${window.location.origin}${path}`

// Just for exact match
if (path.includes("/docs/ngrok-link")) goto(`/docs/cloud-edge`)
if (path.includes("/docs/api/api-clients")) goto(`/docs/api/`)
if (path.includes("/docs/api/client-libraries")) goto(`/docs/api/`)
if (path.includes("/docs/api/terraform")) goto(`/docs/api/`)
if (path.includes("/docs/platform/api")) goto(`/docs/api/`)
if (path.includes("/docs/api/api-clients")) goto(`/docs/api/`)