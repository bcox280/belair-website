import { ClickableCard } from '@/components/ui/card';
import { CommandItem } from '@/components/ui/command';

import { CardProps, PageItemProps } from '../types';

export const CoffeeFinderString = 'coffee-finder';

const CoffeeFinderInfo = () => (
  <>Okay so technically this isn't done but I'm working on it now heh</>
);

export const CoffeeFinderPageItem = ({ onSelect }: PageItemProps) => (
  <CommandItem
    sidePanel={<CoffeeFinderInfo />}
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
      cardFooter={<CoffeeFinderInfo />}
      cardHeader={'Coffee Finder'}
      cardTitle={'Find Coffee in Australia'}
    ></ClickableCard>
  );
};
