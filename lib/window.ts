import { useEffect, useState } from 'react';

export const getRandNumberBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

1;

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width, innerHeight: height } = window;
      setWindowDimensions({ height, width });
    }
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
