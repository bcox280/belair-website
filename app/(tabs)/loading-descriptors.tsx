import { ClickableCard } from '@/components/ui/card';
import { CommandItem } from '@/components/ui/command';

import { CardProps, PageItemProps } from './types';

export const LoadingString = 'Loading';

const LoadingInfo = () => (
  <>Go back and look at pretty rain drops on the loading screen!</>
);

export const LoadingPageItem = ({ onSelect }: PageItemProps) => (
  <CommandItem
    sidePanel={<LoadingInfo />}
    value={LoadingString}
    onSelect={() => onSelect(`/`)}
    key={`${LoadingString}-item`}
  >
    <span>Loading Screen</span>
  </CommandItem>
);

export const LoadingCard = ({ navigate, ...props }: CardProps) => {
  return (
    <ClickableCard
      {...props}
      onClick={() => navigate('./')}
      cardContent={''}
      cardFooter={<LoadingInfo />}
      cardHeader={'Raindrop'}
      cardTitle={'Loading Screen'}
    ></ClickableCard>
  );
};
