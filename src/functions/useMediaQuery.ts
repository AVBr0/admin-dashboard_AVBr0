import { useEffect, useState } from 'react';

export const sizes = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

const useMediaQuery = (screen: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${sizes[screen as keyof typeof sizes]})`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, screen]);

  return matches;
};

export default useMediaQuery;
