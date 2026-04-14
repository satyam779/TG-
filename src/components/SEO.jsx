import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, canonical }) => {
  const location = useLocation();

  useEffect(() => {
    // Update Title
    if (title) {
      document.title = title;
    }

    // Update Meta Description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', description);
        document.head.appendChild(metaDescription);
      }
    }

    // Update Canonical Link
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', canonical);
        document.head.appendChild(canonicalLink);
      }
    } else {
      // Fallback to current URL if no canonical provided
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      const url = `https://techyguide.in${location.pathname}`;
      if (canonicalLink) {
        canonicalLink.setAttribute('href', url);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', url);
        document.head.appendChild(canonicalLink);
      }
    }
  }, [title, description, canonical, location]);

  return null;
};

export default SEO;
