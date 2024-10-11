import { ClickableCard } from '@/components/ui/card';
import { CommandItem } from '@/components/ui/command';

import { CardProps, PageItemProps } from '../types';

export const ArtString = 'art';

export const ArtPageItem = ({ onSelect }: PageItemProps) => (
  <CommandItem
    sidePanel={ArtString}
    value={ArtString}
    onSelect={() => onSelect(`/${ArtString}`)}
    key={`${ArtString}-item`}
  >
    <span>{ArtString}</span>
  </CommandItem>
);

export const ArtCard = ({ navigate, ...props }: CardProps) => {
  //yucky
  return (
    <ClickableCard
      {...props}
      onClick={() => navigate(ArtString)} // this can be done the same as item.
      cardContent={'Art'}
      cardFooter={'Find out all the information you would need about Blair'}
      cardHeader={'Art'}
      cardTitle={'Art'}
    ></ClickableCard>
  );
};