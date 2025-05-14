
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageMetadata } from '@/lib/seo';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: string;
}

/**
 * Component to manage page meta tags dynamically
 */
const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  keywords,
  image = 'https://i.postimg.cc/KckSmbGh/IMG-7163.png',
  type = 'website',
}) => {
  const location = useLocation();
  const path = location.pathname.split('/')[1] || 'home';
  
  // Get metadata based on current page
  const metadata = getPageMetadata(path);
  
  // Use provided props or fallback to page metadata
  const pageTitle = title || metadata.title;
  const pageDescription = description || metadata.description;
  const pageKeywords = keywords || metadata.keywords;
  
  useEffect(() => {
    // Update document title
    document.title = pageTitle;
    
    // Update meta tags
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescription);
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', pageKeywords.join(', '));
    
    // Update Open Graph tags
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', pageDescription);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', window.location.href);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', image);
    document.querySelector('meta[property="og:type"]')?.setAttribute('content', type);
    
    // Update Twitter tags
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', pageTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', pageDescription);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', image);
  }, [pageTitle, pageDescription, pageKeywords, image, type]);
  
  return null; // No visible output
};

export default MetaTags;
