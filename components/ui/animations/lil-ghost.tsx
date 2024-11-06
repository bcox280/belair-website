import { MutableRefObject, useEffect, useRef, useState } from 'react';
import GhostIcon from '@/public/icons/ghost';

import { cn } from '@/lib/utils';
import { getRandNumberBetween, useWindowDimensions } from '@/lib/window';

interface GhostProps {
  className?: string;
}

interface MousePosition {
  x: number;
  y: number;
}

const MousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
};

const GHOST_SIZE = 128;

export const Ghost = ({ className }: GhostProps) => {
  const { width, height } = useWindowDimensions();
  const ghostModeFollow = useRef(false);
  const currentLoc = useRef({
    left: getRandNumberBetween(-64, width - 64),
    top: getRandNumberBetween(-64, width - 64),
  });

  const mousePosition = MousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const element = document.getElementById('12345');

  const animate = () => {
    if (element) {
      if (
        Math.abs(mouse.current.x - currentLoc.current.left - GHOST_SIZE / 2) <
          200 &&
        Math.abs(mouse.current.y - currentLoc.current.top - GHOST_SIZE / 2) <
          200 &&
        element
      ) {
        // set that following should start.

        ghostModeFollow.current = true;
        element.style.transform = `translate(${(mouse.current.x - currentLoc.current.left - GHOST_SIZE / 2) / 1.2}px, ${(mouse.current.y - currentLoc.current.top - GHOST_SIZE / 2) / 1.2}px)`;
        element.style.transition = '1s ease-out';
      } else {
        ghostModeFollow.current = false;
        element.style.transform = `translate(0px, 0px)`;
      }
    }
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    mouse.current.y = mousePosition.y;
    mouse.current.x = mousePosition.x;
  }, [mousePosition.x, mousePosition.y]);

  const runTranslate = () => {
    setTimeout(() => {
      const endLeft = getRandNumberBetween(-64, width - 64);
      const endTop = getRandNumberBetween(-64, height - 64);
      // lets aim for nothing over 200 px/s to start with
      const distanceToTravel = Math.sqrt(
        Math.pow(currentLoc.current.left - endLeft, 2) +
          Math.pow(currentLoc.current.top - endTop, 2)
      );
      setCurrentSpeed(Math.floor(distanceToTravel / 200));
      if (!ghostModeFollow.current) {
        currentLoc.current = { left: endLeft, top: endTop };
      }
      runTranslate();
    }, 6000);
  };

  useEffect(() => {
    // just need this running once BUT! we also need to update it if the left/top change....
    // currently has a bug where you can have multiple running on state change. not high prior to fix

    if (!(height === 0) && !(width === 0)) {
      runTranslate();
      animate();
    }
  }, [element, height, width]);

  return (
    <div
      className={cn('group pointer-events-none absolute  z-30', className)}
      id="12345"
      style={
        ghostModeFollow.current
          ? {
              top: currentLoc.current.top,
              left: currentLoc.current.left,
              animationDelay: '3s',
              transition: `${currentSpeed}s linear`,
            }
          : {
              top: currentLoc.current.top,
              left: currentLoc.current.left,
              animationDelay: '3s',
              transition: `${currentSpeed}s linear`,
            }
      }
    >
      <GhostIcon
        className={`z-30 h-32 w-32 ${ghostModeFollow.current ? '' : 'animate-ghost-micro-movements'} delay-6000`}
      />
    </div>
  );
};
