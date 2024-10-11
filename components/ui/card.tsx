import * as React from 'react';

import { cn } from '@/lib/utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-card text-card-foreground shadow',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

export interface ClickableCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  cardFooter?: React.ReactNode;
  cardTitle?: React.ReactNode;
  cardContent?: React.ReactNode;
  cardHeader?: React.ReactNode;
}

const ClickableCard = React.forwardRef<HTMLDivElement, ClickableCardProps>(
  (
    { className, cardHeader, cardTitle, cardContent, cardFooter, ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        'group cursor-pointer rounded-xl border bg-card text-card-foreground shadow hover:bg-primary/90',
        className
      )}
      {...props}
    >
      <CardHeader className="space-y-0 pb-2">
        <CardDescription>{cardHeader}</CardDescription>
        <CardTitle className="text-4xl tabular-nums">{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent> {cardContent}</CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <CardDescription>{cardFooter}</CardDescription>
      </CardFooter>
    </div>
  )
);
ClickableCard.displayName = 'ClickableCard';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col space-y-1.5 p-6 group-hover:text-accent-foreground',
      className
    )}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'font-semibold leading-none tracking-tight  group-hover:text-accent-foreground',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring group-hover:text-accent-foreground',
      className
    )}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center p-6 pt-0  group-hover:text-accent-foreground',
      className
    )}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  ClickableCard,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
