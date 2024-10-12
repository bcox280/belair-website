import { ClickableCard, ClickableCardProps } from '@/components/ui/card';
import { CommandItem } from '@/components/ui/command';

import { CardProps, PageItemProps } from '../types';

export const HomeString = 'home';

export const HomePageItem = ({ onSelect }: PageItemProps) => (
  <CommandItem
    sidePanel={HomeString}
    value={HomeString}
    onSelect={() => onSelect(`/${HomeString}`)}
    key={`${HomeString}-item`}
  >
    <span>Home</span>
  </CommandItem>
);

// ** TODO
export const HomeCard = ({ navigate, ...props }: CardProps) => {
  return (
    <ClickableCard
      {...props}
      onClick={() => navigate(HomeString)}
      cardContent={'Photo'}
      cardFooter={'Find out all the information you would need about Blair'}
      cardHeader={'About Blair'}
      cardTitle={'Blair Cox'}
    ></ClickableCard>
  );
};
