import GhostIcon from '@/public/icons/ghost';

import { cn } from '@/lib/utils';

interface SpinnerProps {
  className?: string;
  outerSize?: string;
  childSize?: string;
}
export default function Spinner({
  className,
  outerSize,
  childSize,
}: SpinnerProps) {
  return (
    <>
      {/* <div
        className={cn(
          'm-2 h-8 w-8 animate-ghost items-center justify-center rounded-full bg-gradient-to-bl from-background to-primary p-0.5',
          className,
          outerSize
        )}
      >
        <GhostIcon className="h-12 w-12" />
      </div> */}

      {/* <div className={cn('h-6 w-6 rounded-full bg-white', childSize)} /> */}
      {/* idk how, but there is some bug (?) that for the svg paths inside, thats not allowing the application of animations to work properly
      unlessss i put this animate none here????..... */}
      <div className="group">
        <GhostIcon className="h-32 w-32 animate-none" />
      </div>
    </>
  );
}
