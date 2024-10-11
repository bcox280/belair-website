import { useEffect, useRef, useState } from 'react';

import { getRandNumberBetween } from '@/lib/window';

import RainDrop from './rain-drop';

const RainDropGenerator = () => {
  // This is some of the worst code ive ever written and i love it
  const [rerender, forceRerender] = useState('la');
  const currentSize = useRef(1);
  const RainDrops = useRef([] as JSX.Element[]);

  // could have it so you subscribe, and then every x seconds, it pushes out a random raindrop
  useEffect(() => {
    // maybe extract this out tbh
    const generateRainDrop = () =>
      setTimeout(() => {
        const rainDropCopy = [...RainDrops.current];
        const randy = getRandNumberBetween(0, 4);

        if (randy < 1) {
          rainDropCopy.push(
            <RainDrop size={'small'} key={'raindrop' + currentSize.current} />,
          );
        } else if (randy < 2) {
          rainDropCopy.push(
            <RainDrop size={'medium'} key={'raindrop' + currentSize.current} />,
          );
        } else if (randy < 3) {
          rainDropCopy.push(
            <RainDrop size={'large'} key={'raindrop' + currentSize.current} />,
          );
        } else {
          rainDropCopy.push(
            <RainDrop
              size={'x-small'}
              key={'raindrop' + currentSize.current}
            />,
          );
        }
        // this does work, butttttt once the array gets super large, then what? some sort of cleanup function.
        if (currentSize.current === 200) {
          RainDrops.current = rainDropCopy.slice(100);
        } else {
          RainDrops.current = rainDropCopy;
        }

        currentSize.current = currentSize.current + 1;

        forceRerender('la' + currentSize.current);
        generateRainDrop();
      }, 200);
    generateRainDrop();
  }, []);
  // almost want a subscription service

  return <>{...RainDrops.current}</>;
};

export default RainDropGenerator;
