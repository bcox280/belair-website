import { ClickableCard, ClickableCardProps } from '@/components/ui/card';
import { CommandItem } from '@/components/ui/command';

import { CardProps, PageItemProps } from '../types';

export const CoffeeFinderString = 'coffee-finder';

export const CoffeeFinderPageItem = ({ onSelect }: PageItemProps) => (
  <CommandItem
    sidePanel={CoffeeFinderString}
    value={CoffeeFinderString}
    onSelect={() => onSelect(`/${CoffeeFinderString}`)}
    key={`${CoffeeFinderString}-item`}
  >
    <span>Coffee Finder</span>
  </CommandItem>
);

export const CoffeeFinderCard = ({ navigate, ...props }: CardProps) => {
  return (
    <ClickableCard
      {...props}
      onClick={() => navigate(CoffeeFinderString)}
      cardContent={'Map Photo'}
      cardFooter={'Find out all the information you would need about Blair'}
      cardHeader={'Coffee Finder'}
      cardTitle={'Find Coffee in Australia'}
    ></ClickableCard>
  );
};
