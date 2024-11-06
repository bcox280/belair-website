import RainDropIcon from '@/public/icons/rain';

import { getRandNumberBetween, useWindowDimensions } from '@/lib/window';

type Size = 'large' | 'medium' | 'small' | 'x-small';

export type RainDropProps = {
  size: Size;
};

const large = 'h-10 w-10';
const medium = 'h-8 w-8';
const small = 'h-6 w-6';
const xSmall = 'h-4 w-4';

const calcSizeDisplacement = (size: Size) =>
  (size === 'large' ? 40 : size === 'medium' ? 32 : size === 'small' ? 24 : 8) /
  2;

const RainDrop = ({ size }: RainDropProps) => {
  const { width, height } = useWindowDimensions();

  const displacement = calcSizeDisplacement(size);

  // particular calculated so it is centered. wasnt possibly to dynamically do easilyyyy through tailwindcss (unless i made it super ugly, and hard coded LOTSA values)
  const left = getRandNumberBetween(-displacement, width - displacement);
  const top = getRandNumberBetween(-displacement, height - displacement);

  const dropSize =
    size === 'large'
      ? large
      : size === 'medium'
        ? medium
        : size === 'small'
          ? small
          : xSmall;

  return (
    <div className="absolute" style={{ top, left }}>
      {/* discussing i know, but cant do random value in tailwind in the props. could map out all the possible heights, but not worth it and that would be uglier lol */}

      <RainDropIcon
        className={`absolute ${dropSize} animate-raindrop fill-primary/40 opacity-0 duration-2000`}
      />
      <span
        className={`absolute flex ${dropSize} *:absolute *:inline-flex *:h-full *:w-full *:rounded-full *:border-2 *:border-primary/20 *:opacity-0`}
      >
        <span className="animate-ripple delay-2000"></span>
        <span className="animate-ripple delay-2300"></span>
        <span className="animate-ripple delay-2600"></span>
      </span>
    </div>
  );
};

export default RainDrop;
