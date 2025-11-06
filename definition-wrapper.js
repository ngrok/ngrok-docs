const terms = [
	// Please add new terms in alphabetical order.
	{
		titles: ["ALPN"],
		caseSensitive: true,
		link: "https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation",
		meaning:
			"ALPN (Application-Layer Protocol Negotiation) allows a client and server to negotiate which application protocol (like HTTP/2 or HTTP/1.1) to use over a secure connection during the TLS handshake.",
	},
	{
		titles: ["CEL"],
		caseSensitive: true,
		link: "https://github.com/google/cel-spec/tree/master?tab=readme-ov-file#common-expression-language",
		meaning:
			"CEL (Common Expression Language) is a fast, safe, and portable expression language developed by Google for evaluating expressions in configuration, policy, and runtime environments.",
	},
	{
		titles: ["CRD"],
		caseSensitive: true,
		meaning:
			"CustomResourceDefinitions allow users to extend the Kubernetes API by defining their own resource types.",
		link: "https://kubernetes.io//tasks/extend-kubernetes/custom-resources/custom-resource-definitions/",
		pluralEnding: "s",
	},
	{
		titles: ["Endpoint Pooling", "Endpoint pool"],
		meaning:
			'When your create two ngrok endpoints with the same URL (and binding), those endpoints automatically form a "pool" and share incoming traffic.',
		link: "/docs/universal-gateway/endpoint-pooling/",
		pluralEnding: "s",
	},
	{
		titles: ["Gateway API CRD", "Gateway API"],
		glossaryIndex: 0,
		link: "https://gateway-api.sigs.k8s.io/guides/",
		meaning:
			"Gateway API CRDs (Custom Resource Definitions) are a set of standardized, extensible resources that manage networking configurations like routing, gateways, and traffic policies.",
		pluralEnding: "s",
	},
	{
		titles: ["Helm"],
		meaning:
			"Helm is a package manager for Kubernetes that simplifies the deployment and management of applications on Kubernetes clusters.",
		link: "https://helm.sh/",
	},
	{
		titles: ["Ingress"],
		meaning:
			"An ingress is an entry point into a network for traffic from outside of the network.",
		pluralEnding: "es",
	},
	{
		titles: ["IP CIDR", "CIDR"],
		glossaryIndex: 1,
		meaning:
			"Classless Inter-Domain Routing is a method used to allocate IP addresses more efficiently and route IP packets more flexibly than older class-based systems.",
		link: "https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",
		pluralEnding: "s",
	},
	{
		titles: ["JIT provisioning"],
		meaning:
			"Just-In-Time Single Sign-On Provisioning is a user account provisioning method that automatically creates (or updates) user accounts at the time of login via Single Sign-On, rather than pre-creating all user accounts in advance.",
		link: "https://en.wikipedia.org/wiki/System_for_Cross-domain_Identity_Management",
	},
	{
		titles: ["K8", "K8s"],
		glossaryIndex: 1,
		meaning: "K8s is an industry-standard abbreviation for Kubernetes.",
		pluralEnding: "s",
		link: "https://kubernetes.io/docs/concepts/overview/",
	},
	{
		titles: ["Let's Encrypt", "Let's Encrypt", "LetsEncrypt", "Lets encrypt"],
		meaning:
			"Let's Encrypt is a free, automated, and open certificate authority (CA) that provides digital certificates to enable HTTPS (SSL/TLS) for websites.",
		link: "https://letsencrypt.org/about/",
	},
	{
		titles: ["MCP server", "MCP"],
		glossaryIndex: 1,
		meaning:
			"MCP (Model Context Protocol) is an open standard that allows AI models to access external data, tools, and services, and potentially use them to automate workflows.",
		link: "https://en.wikipedia.org/wiki/Model_Context_Protocol",
		pluralEnding: "s",
	},
	{
		titles: ["OIDC"],
		meaning:
			"OpenID Connect (OIDC) is an authentication protocol that enables third-party applications to confirm a user's identity and access basic profile details through a single sign-on (SSO) process.",
		link: "https://en.wikipedia.org/wiki/OpenID",
	},
	{
		titles: ["OWASP"],
		caseSensitive: true,
		meaning:
			"The Open Web Application Security Project is a non-profit organization dedicated to improving software security through providing resources, tools, and community support.",
		link: "https://owasp.org/about/",
	},
	{
		titles: ["reverse proxy", "reverse proxies", "Reverse Proxy"],
		glossaryIndex: 2,
		link: "https://en.wikipedia.org/wiki/Reverse_proxy",
		meaning:
			"Reverse proxies are an extra security layer between public traffic and your internal services. They live on servers or cloud services, and they intercept and forward traffic to upstream services.",
	},
  {
    titles: ["Service User", "Service Users"],
    caseSensitive: false,
    meaning:
      "A Service User (previously called a Bot User) is a service account that owns a set of credentials (authtokens, API keys, and SSH keys) independently of a person. This is useful for automated systems that programmatically interact with your ngrok accounts.",
    link: "/iam/service-users/",
  },
	{
		titles: ["Shadow IT", "shadow IT"],
		meaning:
			"Shadow IT refers to IT systems, software, and cloud services used by individuals within an organization without the IT department's knowledge or approval.",
		link: "https://en.wikipedia.org/wiki/Shadow_IT",
	},
	{
		titles: ["SNI"],
		caseSensitive: true,
		link: "https://en.wikipedia.org/wiki/Server_Name_Indication",
		meaning:
			"SNI (Server Name Indication) is a TLS extension that allows a client to specify the hostname it is trying to connect to during the TLS handshake, enabling servers to present the correct SSL/TLS certificate for that hostname.",
	},
	{
		titles: [
			"TCP-KeepAlive",
			"TCP KeepAlive",
			"TCP Keep-Alive",
			"TCP Keep Alive",
		],
		meaning:
			"TCP KeepAlive enables TCP connections to remain active even when no data is exchanged between the connected endpoints.",
		link: "https://en.wikipedia.org/wiki/Keepalive",
	},
	{
		titles: ["TLS Certificate"],
		pluralEnding: "s",
		link: "https://en.wikipedia.org/wiki/Transport_Layer_Security",
		meaning:
			"A TLS certificate (or SSL certificate) is a digital certificate that ensure your connection to a website or server is securly encrypted.",
	},
	{
		titles: ["TLS Termination"],
		meaning:
			"TLS (Transport Layer Security) termination is the process of decrypting incoming TLS traffic at a server or load balancer before passing the unencrypted traffic to internal systems.",
		link: "/docs/universal-gateway/tls-termination/",
	},
	{
		titles: ["Traffic Policy", "Traffic Policies"],
		meaning:
			"Traffic Policy is a configuration language that enables you to filter, match, manage and orchestrate traffic to your endpoints. For example, you can add authentication, send custom response, rate limit traffic, and more.",
		link: "/docs/traffic-policy/",
	},
	{
		titles: ["v2"],
		caseSensitive: true,
		meaning: "v2 is shorthand for the second major version of the ngrok Agent.",
		link: "/docs/agent/config/v2",
	},
	{
		titles: ["v3"],
		caseSensitive: true,
		meaning: "v3 is shorthand for the third major version of the ngrok Agent.",
		link: "/docs/agent/config/v3",
	},
	{
		titles: ["WAF"],
		link: "https://en.wikipedia.org/wiki/Web_application_firewall",
		caseSensitive: true,
		meaning:
			"A web application firewall (WAF) is an intermediary service in the cloud or on a server that protects web services by filtering and monitoring HTTP traffic.",
	},
];




function wrapTermsOnLoad() {
  // Get page title to check against
  const pageTitle = document.getElementById('page-title');
  const pageTitleText = pageTitle ? pageTitle.textContent.toLowerCase() : '';
  
  // Get all mdx-content containers
  const mdxContainers = document.querySelectorAll('div[class*="mdx-content"]');
  
  // Track which terms have been wrapped to only wrap the first instance
  const wrappedTerms = new Set();
  
  mdxContainers.forEach((container, containerIndex) => {
    // Find all p spans and li elements within this container
    const pSpans = container.querySelectorAll('span[data-as="p"]');
    const listItems = container.querySelectorAll('li');
    const elementsToProcess = [...pSpans, ...listItems];
    
    elementsToProcess.forEach((element, elementIndex) => {
      const elementText = element.textContent;
      
      // Skip if element is inside a link, heading, or code block
      if (isInsideExcludedElement(element)) {
        return;
      }
      
      terms.forEach(termObj => {
        termObj.titles.forEach(termTitle => {
          // Skip if this term is already wrapped or if it appears in the page title
          if (wrappedTerms.has(termTitle) || pageTitleText.includes(termTitle.toLowerCase())) {
            return;
          }
          
          // Skip if we're already on the page that this term links to
          if (termObj.link && window.location.pathname.includes(termObj.link)) {
            return;
          }
          
          // Create regex for term matching (no global flag to replace only first occurrence)
          const flags = termObj.caseSensitive ? '' : 'i';
          const regex = new RegExp(`\\b${escapeRegex(termTitle)}\\b`, flags);
          
          // Check if term exists in this element
          if (regex.test(element.textContent)) {
            // Use text node replacement instead of innerHTML replacement
            if (replaceInTextNodes(element, regex, termTitle, termObj)) {
              wrappedTerms.add(termTitle);
              return; // Exit early since we only want first instance
            }
          }
        });
      });
    });
  });
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function isInsideExcludedElement(element) {
  // List of tag names to exclude
  const excludedTags = ['A', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'PRE', 'CODE'];
  
  // Check current element and all ancestors
  let current = element;
  while (current && current !== document.body) {
    if (excludedTags.includes(current.tagName)) {
      return true;
    }
    // Check if parent has data-component-part="tabs-list"
    if (current.getAttribute('data-component-part') === 'tabs-list') {
      return true;
    }
    current = current.parentElement;
  }
  
  return false;
}

function replaceInTextNodes(element, regex, termTitle, termObj) {
  // Get all text nodes within the element
  const textNodes = [];
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        // Skip text nodes that are inside excluded elements
        if (isInsideExcludedElement(node.parentElement)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );
  
  let currentNode;
  while (currentNode = walker.nextNode()) {
    textNodes.push(currentNode);
  }
  
  // Find the first text node that contains our term
  for (let textNode of textNodes) {
    const text = textNode.textContent;
    if (regex.test(text)) {
      // Create the replacement elements
      const definition = termObj.meaning || 'Definition not available';
      const link = termObj.link || '';
      
      const button = document.createElement('button');
      button.setAttribute('data-state', 'closed');
      button.setAttribute('data-tooltip', definition);
      if (link) {
        button.setAttribute('data-link', link);
      }
      
      const span = document.createElement('span');
      span.className = 'tooltip underline decoration-dotted decoration-2 underline-offset-4 decoration-gray-400 dark:decoration-gray-500';
      
      // Preserve styling from parent elements (italics, bold, etc.)
      copyParentStyles(textNode.parentElement, span);
      
      // Split the text and create new nodes
      const match = text.match(regex);
      if (match) {
        const matchText = match[0];
        const beforeText = text.substring(0, match.index);
        const afterText = text.substring(match.index + matchText.length);
        
        span.textContent = matchText;
        button.appendChild(span);
        
        // Replace the text node with the new structure
        const parent = textNode.parentNode;
        if (beforeText) {
          parent.insertBefore(document.createTextNode(beforeText), textNode);
        }
        parent.insertBefore(button, textNode);
        if (afterText) {
          parent.insertBefore(document.createTextNode(afterText), textNode);
        }
        parent.removeChild(textNode);
        
        // Add tooltip behavior
        addTooltipBehavior(button);
        
        return true; // Successfully replaced
      }
    }
  }
  
  return false; // No replacement made
}

function copyParentStyles(sourceElement, targetElement) {
  // Walk up the DOM tree to find styling elements
  let current = sourceElement;
  const stylesToPreserve = {
    fontStyle: '',
    fontWeight: '',
    textDecoration: ''
  };
  
  while (current && current !== document.body) {
    const computedStyle = window.getComputedStyle(current);
    
    // Preserve italic styling from <em>, <i>, or CSS
    if (computedStyle.fontStyle === 'italic' && !stylesToPreserve.fontStyle) {
      stylesToPreserve.fontStyle = 'italic';
    }
    
    // Preserve bold styling from <strong>, <b>, or CSS
    const fontWeight = computedStyle.fontWeight;
    if ((fontWeight === 'bold' || parseInt(fontWeight) >= 600) && !stylesToPreserve.fontWeight) {
      stylesToPreserve.fontWeight = fontWeight;
    }
    
    // Preserve underline styling from <u> or CSS (but not our tooltip underline)
    const textDecoration = computedStyle.textDecoration;
    if (textDecoration && textDecoration !== 'none' && !current.classList.contains('tooltip')) {
      stylesToPreserve.textDecoration = textDecoration;
    }
    
    current = current.parentElement;
  }
  
  // Apply the preserved styles to the target element
  if (stylesToPreserve.fontStyle) {
    targetElement.style.fontStyle = stylesToPreserve.fontStyle;
  }
  if (stylesToPreserve.fontWeight) {
    targetElement.style.fontWeight = stylesToPreserve.fontWeight;
  }
  if (stylesToPreserve.textDecoration) {
    targetElement.style.textDecoration = stylesToPreserve.textDecoration;
  }
}

function addTooltipBehavior(button) {
  const tooltip = button.getAttribute('data-tooltip');
  const link = button.getAttribute('data-link');
  
  if (!tooltip) return;
  
  let tooltipElement = null;
  let hideTimeout = null;
  
  function showTooltip(e) {
    // Clear any pending hide timeout
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
    
    // Remove any existing tooltip
    hideTooltip();
    
    // Create tooltip element
    tooltipElement = document.createElement('div');
    
    // Create the main content
    const contentDiv = document.createElement('div');
    contentDiv.textContent = tooltip;
    tooltipElement.appendChild(contentDiv);
    
    // Add "Learn More" link if there's a link
    if (link) {
      const learnMoreDiv = document.createElement('div');
      learnMoreDiv.style.cssText = `
        margin-top: 8px !important;
        padding-top: 8px !important;
        border-top: 1px solid light-dark(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2)) !important;
      `;
      
      const learnMoreLink = document.createElement('a');
      learnMoreLink.href = link;
      learnMoreLink.style.cssText = `
        color: light-dark(#1e40af, #60a5fa) !important;
        text-decoration: none !important;
        cursor: pointer !important;
        font-size: 14px !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 4px !important;
      `;
      
      // Add hover effects
      learnMoreLink.addEventListener('mouseenter', () => {
        learnMoreLink.style.textDecoration = 'underline';
      });
      learnMoreLink.addEventListener('mouseleave', () => {
        learnMoreLink.style.textDecoration = 'none';
      });
      
      // Determine if URL is absolute or relative
      const isInternalLink = link.startsWith("/");
      
      // Create appropriate SVG icon
      const iconSvg = document.createElement('span');
      iconSvg.innerHTML = `
			<div>
			${isInternalLink 
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link2-icon lucide-link-2"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`}
				</div>`;
      
      // Add text and icon to the link
      learnMoreLink.appendChild(document.createTextNode('Learn More'));
      learnMoreLink.appendChild(iconSvg);
      
      // Handle link clicks
      learnMoreLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (link.startsWith('http')) {
          window.open(link, '_blank');
        } else {
          window.location.href = link;
        }
        hideTooltip();
      });
      
      learnMoreDiv.appendChild(learnMoreLink);
      tooltipElement.appendChild(learnMoreDiv);
    }
    
    // Determine if we're on a mobile device
    const isMobile = window.innerWidth <= 768;
    const maxWidth = isMobile ? 'calc(100vw - 32px)' : 'min(320px, 90vw)';
    
    // Style with light/dark mode support
    tooltipElement.style.cssText = `
      position: fixed !important;
      z-index: 999999 !important;
      background-color: light-dark(white, #000000) !important;
      color: light-dark(black, white) !important;
      border: 1px solid light-dark(#e5e7eb, #374151) !important;
      padding: ${isMobile ? '12px' : '12px'} !important;
      border-radius: 8px !important;
      font-size: 16px !important;
      font-weight: 400 !important;
      line-height: 1.75 !important;
      width: auto !important;
      max-width: ${maxWidth} !important;
      min-width: 0 !important;
      word-wrap: break-word !important;
      overflow-wrap: break-word !important;
      white-space: normal !important;
      pointer-events: auto !important;
      box-shadow: 0 2px 8px light-dark(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)) !important;
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      box-sizing: border-box !important;
      overflow: hidden !important;
    `;
    
    // Position tooltip above the element like in the image
    const rect = button.getBoundingClientRect();
    
    // Add to body first to measure
    document.body.appendChild(tooltipElement);
    const tooltipRect = tooltipElement.getBoundingClientRect();
    
    // Center horizontally and position above (using fixed positioning, so no scroll offset needed)
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
    let top = rect.top - tooltipRect.height - 8;
    
    // Keep tooltip on screen
    if (left < 10) left = 10;
    if (left + tooltipRect.width > window.innerWidth - 10) {
      left = window.innerWidth - tooltipRect.width - 10;
    }
    
    // If no room above, show below
    if (top < 10) {
      top = rect.bottom + 8;
    }
    
    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
    
    // Add hover behavior to tooltip to keep it open
    tooltipElement.addEventListener('mouseenter', () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
    });
    
    tooltipElement.addEventListener('mouseleave', () => {
      hideTimeout = setTimeout(hideTooltip, 100);
    });
  }
  
  function hideTooltip() {
    if (tooltipElement) {
      tooltipElement.remove();
      tooltipElement = null;
    }
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
  }
  
  function scheduleHide() {
    hideTimeout = setTimeout(hideTooltip, 100);
  }
  
  // Add event listeners
  button.addEventListener('mouseenter', showTooltip);
  button.addEventListener('mouseleave', scheduleHide);
  button.addEventListener('focus', showTooltip);
  button.addEventListener('blur', scheduleHide);
}

// Set up MutationObserver to handle theme changes and re-renders
function setupContentObserver() {
  // Throttle function to avoid excessive re-runs
  let timeout = null;
  function throttledWrapTerms() {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      wrapTermsOnLoad();
    }, 100);
  }
  
  // Watch for changes to the main content area
  const observer = new MutationObserver((mutations) => {
    let shouldRerun = false;
    
    mutations.forEach((mutation) => {
      // Check if mdx-content or main content areas changed
      if (mutation.type === 'childList') {
        const target = mutation.target;
        if (target.classList && (
          target.classList.contains('mdx-content') ||
          target.id === 'content' ||
          target.id === 'content-area'
        )) {
          shouldRerun = true;
        }
        
        // Also check if added nodes contain mdx-content
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.classList && node.classList.contains('mdx-content')) {
              shouldRerun = true;
            }
            // Check if added node contains mdx-content
            if (node.querySelector && node.querySelector('.mdx-content')) {
              shouldRerun = true;
            }
          }
        });
      }
      
      // Also watch for attribute changes that might indicate theme changes
      if (mutation.type === 'attributes' && 
          (mutation.attributeName === 'class' || mutation.attributeName === 'data-theme')) {
        shouldRerun = true;
      }
    });
    
    if (shouldRerun) {
      throttledWrapTerms();
    }
  });
  
  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'data-theme']
  });
  
  return observer;
}

// Run on page load with multiple timing attempts and set up observer
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    wrapTermsOnLoad();
    setupContentObserver();
    
    // Also try after a delay in case framework re-renders
    setTimeout(() => {
      wrapTermsOnLoad();
    }, 500);
    
    setTimeout(() => {
      wrapTermsOnLoad();
    }, 1000);
  });
} else {
  wrapTermsOnLoad();
  setupContentObserver();
  
  // Also try after delays
  setTimeout(() => {
    wrapTermsOnLoad();
  }, 500);
}
