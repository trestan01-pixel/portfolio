import { useState, useEffect } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(QUERY);
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    // Safari < 14 supports the deprecated addListener method
    // All other modern browsers support addEventListener
    try {
        mediaQuery.addEventListener('change', handleChange);
    } catch (e) {
        mediaQuery.addListener(handleChange);
    }

    return () => {
        try {
            mediaQuery.removeEventListener('change', handleChange);
        } catch (e) {
            mediaQuery.removeListener(handleChange);
        }
    };
  }, []);

  return prefersReducedMotion;
};
