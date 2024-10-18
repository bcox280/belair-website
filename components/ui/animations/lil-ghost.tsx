import GhostIcon from '@/public/icons/ghost';

import { cn } from '@/lib/utils';

interface GhostProps {
  className?: string;
  outerSize?: string;
  childSize?: string;
}
export default function Ghost({ className, outerSize, childSize }: GhostProps) {
  return (
    <>
      {/* <div
        className={cn(
          'absolute left-4 top-4 -z-10 h-4 w-16 items-center justify-center bg-gradient-to-bl from-background to-primary p-0.5',
          className,
          outerSize
        )}
      ></div> */}
      {/* 
        <GhostIcon className="h-12 w-12" />
      </div> */}

      {/* <div className={cn('h-6 w-6 rounded-full bg-white', childSize)} /> */}
      {/* idk how, but there is some bug (?) that for the svg paths inside, thats not allowing the application of animations to work properly
      unlessss i put these animations and then turn them off with duration 0 here????..... */}
      <div className="group">
        <GhostIcon className="z-24 h-32 w-32 animate-ghost-bl animate-ghost-br animate-ghost-tl animate-ghost-tr duration-0" />
      </div>
    </>
  );
}
