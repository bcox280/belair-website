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
    <div
      className={cn(
        'm-2 h-8 w-8 animate-ghost items-center justify-center rounded-full bg-gradient-to-bl from-background to-primary p-0.5',
        className,
        outerSize
      )}
    >
      <div className={cn('h-6 w-6 rounded-full bg-white', childSize)} />
    </div>
  );
}
