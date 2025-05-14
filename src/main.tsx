
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

// Preconnect to external domains for performance
const preconnectLinks = [
  { href: "https://fonts.googleapis.com", crossOrigin: "" },
  { href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { href: "https://images.unsplash.com", crossOrigin: "" },
  { href: "https://i.postimg.cc", crossOrigin: "" },
];

// Add preconnect links
preconnectLinks.forEach(({ href, crossOrigin }) => {
  const linkEl = document.createElement('link');
  linkEl.rel = 'preconnect';
  linkEl.href = href;
  if (crossOrigin) linkEl.crossOrigin = crossOrigin;
  document.head.appendChild(linkEl);
});

// Create root with StrictMode for better development experience
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
