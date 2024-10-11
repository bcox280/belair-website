import RainDropIcon from '@/public/icons/rain';

import { getRandNumberBetween, getWindowDimensions } from '@/lib/window';

type Size = 'large' | 'medium' | 'small' | 'x-small';

export type RainDropProps = {
  size: Size;
};

const RainDrop = ({ size }: RainDropProps) => {
  const { width, height } = getWindowDimensions();

  const large = 'h-10 w-10';
  const medium = 'h-8 w-8';
  const small = 'h-6 w-6';
  const xSmall = 'h-4 w-4';

  //ugly plz fix later, theres a much better way of doing this
  const left = getRandNumberBetween(
    -(size === 'large'
      ? 40
      : size === 'medium'
        ? 32
        : size === 'small'
          ? 24
          : 8) / 2,
    width -
      (size === 'large'
        ? 40
        : size === 'medium'
          ? 32
          : size === 'small'
            ? 24
            : 8) /
        2,
  );
  const top = getRandNumberBetween(
    -(size === 'large'
      ? 40
      : size === 'medium'
        ? 32
        : size === 'small'
          ? 24
          : 8) / 2,
    height -
      (size === 'large'
        ? 40
        : size === 'medium'
          ? 32
          : size === 'small'
            ? 24
            : 8) /
        2,
  );

  return (
    <div className='absolute' style={{ top, left }}>
      {/* discussing i know, but cant do random value in tailwind in the props. could map out all the possible heights, but not worth it and that would be uglier lol */}

      <RainDropIcon
        className={`${size === 'large' ? large : size === 'medium' ? medium : size === 'small' ? small : xSmall} opacity-0 absolute fill-primary/40 duration-2000 animate-raindrop`}
      />
      <span
        className={`absolute flex ${size === 'large' ? large : size === 'medium' ? medium : size === 'small' ? small : xSmall} *:opacity-0 *:absolute *:inline-flex *:h-full *:w-full *:rounded-full *:border-2 *:border-primary/20`}
      >
        <span className='animate-ripple delay-2000'></span>
        <span className='animate-ripple delay-2300'></span>
        <span className='animate-ripple delay-2600'></span>
      </span>
    </div>
  );
};

export default RainDrop;
