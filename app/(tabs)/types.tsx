import { ClickableCardProps } from '@/components/ui/card';

export interface PageItemProps {
  onSelect: (arg0: string) => void;
}

export interface CardProps extends ClickableCardProps {
  navigate: (arg0: string) => void;
}
