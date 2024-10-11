import { ClickableCard } from '@/components/ui/card';
import { CommandItem } from '@/components/ui/command';

import { CardProps, PageItemProps } from '../types';

export const AboutString = 'about';

const AboutInfo = () => (
  <>Find out all the information you need to hire Blair Cox</>
);

export const AboutPageItem = ({ onSelect }: PageItemProps) => (
  <CommandItem
    sidePanel={<AboutInfo />}
    value={AboutString}
    onSelect={() => onSelect(`/${AboutString}`)}
    key={`${AboutString}-item`}
  >
    <span>About</span>
  </CommandItem>
);

export const AboutCard = ({ navigate, ...props }: CardProps) => {
  //yucky
  return (
    <ClickableCard
      {...props}
      onClick={() => navigate(AboutString)} // this can be done the same as item.
      cardContent={'Photo'}
      cardFooter={<AboutInfo />}
      cardHeader={'About Blair'}
      cardTitle={'Blair Cox'}
    ></ClickableCard>
  );
};
