interface AnimatedTrailProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The duration of the animation.
   * @default "10s"
   */
  duration?: string;

  contentClassName?: string;

  trailColor?: string;
  trailSize?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 5,
  md: 10,
  lg: 20,
};

export default function Siren({
  children,
  className,
  duration,
  trailColor = 'red',
  trailSize = 'md',
  contentClassName,
  ...props
}: AnimatedTrailProps) {
  return (
    <div>
      <div
        className="siren-trail absolute inset-0 h-full w-full"
        style={{
          background: `conic-gradient(from var(--angle) at 50% 50%, transparent ${100 - sizes[trailSize]}%, ${trailColor})`,
        }}
      />
      <div
        className="siren-trail absolute inset-0 h-full w-full delay-300"
        style={{
          background: `conic-gradient(from var(--angle) at 50% 50%, transparent ${100 - sizes[trailSize]}%, ${'blue'})`,
        }}
      />
      <div
        className="siren-trail absolute inset-0 h-full w-full delay-1000"
        style={{
          background: `conic-gradient(from var(--angle) at 50% 50%, transparent ${100 - sizes[trailSize]}%, ${trailColor})`,
        }}
      />
      <div
        className="siren-trail absolute inset-0 h-full w-full delay-1300"
        style={{
          background: `conic-gradient(from var(--angle) at 50% 50%, transparent ${100 - sizes[trailSize]}%, ${'blue'})`,
        }}
      />
    </div>
  );
}
