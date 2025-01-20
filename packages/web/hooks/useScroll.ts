import { useState, useEffect } from 'react';

export const useScroll = (threshold = 20) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setScrolled(currentScrollPos > threshold);

      setVisible(
        (prevScrollPos > currentScrollPos) ||
        currentScrollPos < threshold
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, threshold]);

  return { scrolled, visible };
};