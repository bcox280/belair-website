import { useCallback, useEffect, useRef, useState } from 'react';
import GhostIcon from '@/public/icons/ghost';

import { cn } from '@/lib/utils';
import { getRandNumberBetween, useWindowDimensions } from '@/lib/window';

interface GhostProps {
  className?: string;
  isLoading: boolean;
  height: number;
  width: number;
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

export const Ghost = ({ className, height, width, isLoading }: GhostProps) => {
  const ghostModeFollow = useRef(false);
  const currentLoc = useRef({
    left: width / 2 - 64,
    top: height / 2 - 64,
  });

  const mousePosition = MousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentlyRunningAnimations = useRef<NodeJS.Timeout>();
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const element = document.getElementById('12345');

  // this can have multiple iterations running, not a fan tbh
  const animate = useCallback(() => {
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
  }, [element]);

  useEffect(() => {
    mouse.current.y = mousePosition.y;
    mouse.current.x = mousePosition.x;
  }, [mousePosition.x, mousePosition.y]);

  // still a lil better with the new changes, but not where i want it atm.
  useEffect(() => {
    const runTranslate = () => {
      if (!currentlyRunningAnimations.current) {
        const timeout = setTimeout(() => {
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
          clearTimeout(currentlyRunningAnimations.current);

          currentlyRunningAnimations.current = undefined;
          runTranslate();
        }, 6000);
        currentlyRunningAnimations.current = timeout;
      }
    };
    runTranslate();
    animate();

    return () => {
      clearTimeout(currentlyRunningAnimations.current);
      currentlyRunningAnimations.current = undefined;
    };
  }, [element, animate, height, width]);

  return (
    <div
      className={cn('group pointer-events-none absolute z-30', className)}
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
