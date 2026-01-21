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

    try {
        mediaQuery.addEventListener('change', handleChange);
    } catch (e) {
        // Safari old versions compatibility
        mediaQuery.addListener(handleChange);
    }

    return () => {
        try {
            mediaQuery.removeEventListener('change', handleChange);
        } catch (e) {
            // Safari old versions compatibility
            mediaQuery.removeListener(handleChange);
        }
    };
  }, []);

  return prefersReducedMotion;
};
