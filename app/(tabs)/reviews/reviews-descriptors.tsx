import { ClickableCard } from '@/components/ui/card';
import { CommandItem } from '@/components/ui/command';

import { CardProps, PageItemProps } from '../types';

export const ReviewsString = 'reviews';

const ReviewsInfo = () => (
  <>
    See what people have to say about me
  </>
);

export const ReviewsPageItem = ({ onSelect }: PageItemProps) => (
  <CommandItem
    sidePanel={<ReviewsInfo />}
    value={ReviewsString}
    onSelect={() => onSelect(`/${ReviewsString}`)}
    key={`${ReviewsString}-item`}
  >
    Reviews
  </CommandItem>
);

export const ReviewsCard = ({ navigate, ...props }: CardProps) => {
  return (
    <ClickableCard
      {...props}
      onClick={() => navigate(ReviewsString)}
      cardContent={''}
      cardFooter={<ReviewsInfo />}
      cardHeader={''}
      cardTitle={'Reviews'}
    ></ClickableCard>
  );
};
