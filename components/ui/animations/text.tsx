import { cn } from '@/lib/utils';

export default function AnimatedGradientText({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-glow-text bg-gradient-to-r from-primary from-25% via-foreground via-50% to-primary/80 to-75% bg-[length:150%_auto] bg-clip-text text-center text-transparent',
        className
      )}
    >
      {children}
    </div>
  );
}
