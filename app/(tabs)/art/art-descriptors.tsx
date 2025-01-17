import { ClickableCard } from '@/components/ui/card';
import { CommandItem } from '@/components/ui/command';

import { CardProps, PageItemProps } from '../types';

export const ArtString = 'art';

const ArtInfo = () => (
  <>
    Have a look at some of the random art I&apos;ve done. This could soon come to a
    whiteboard near you
  </>
);

export const ArtPageItem = ({ onSelect }: PageItemProps) => (
  <CommandItem
    sidePanel={<ArtInfo />}
    value={ArtString}
    onSelect={() => onSelect(`/${ArtString}`)}
    key={`${ArtString}-item`}
  >
    Art
  </CommandItem>
);

export const ArtCard = ({ navigate, ...props }: CardProps) => {
  return (
    <ClickableCard
      {...props}
      onClick={() => navigate(ArtString)}
      cardContent={''}
      cardFooter={<ArtInfo />}
      cardHeader={'Pretty'}
      cardTitle={'Art'}
    ></ClickableCard>
  );
};
