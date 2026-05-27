// Vercel Speed Insights initialization
// This script loads and initializes Speed Insights for the vanilla JavaScript project

(function() {
  'use strict';
  
  // Check if we're in production mode
  const isDev = window.location.hostname === 'localhost' || 
                window.location.hostname === '127.0.0.1' ||
                window.location.hostname === '';

  // Initialize Speed Insights queue
  if (!window.si) {
    window.si = function(...params) {
      window.siq = window.siq || [];
      window.siq.push(params);
    };
  }

  // Load the Speed Insights script
  function loadSpeedInsights() {
    const script = document.createElement('script');
    script.defer = true;
    
    if (isDev) {
      script.src = 'https://va.vercel-scripts.com/v1/speed-insights/script.debug.js';
    } else {
      script.src = 'https://va.vercel-scripts.com/v1/speed-insights/script.js';
    }
    
    script.setAttribute('data-sdkn', '@vercel/speed-insights');
    script.setAttribute('data-sdkv', '2.0.0');
    
    document.head.appendChild(script);
  }

  // Load when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSpeedInsights);
  } else {
    loadSpeedInsights();
  }
})();
