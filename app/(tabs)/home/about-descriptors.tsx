import { ClickableCard, ClickableCardProps } from '@/components/ui/card';
import { CommandItem } from '@/components/ui/command';

import { CardProps, PageItemProps } from '../types';

export const HomeString = 'home';

const HomeInfo = () => <>Come look at those cards on the home screen again!</>;

export const HomePageItem = ({ onSelect }: PageItemProps) => (
  <CommandItem
    sidePanel={<HomeInfo />}
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
      cardFooter={<HomeInfo />}
      cardHeader={'About Blair'}
      cardTitle={'Blair Cox'}
    ></ClickableCard>
  );
};
