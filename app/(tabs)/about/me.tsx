import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  HoverableCard,
} from '@/components/ui/card';

export const Me = () => (
  <HoverableCard>
    <CardHeader className="space-y-0 pb-2">
      <CardTitle className="text-4xl tabular-nums">
        Me{' '}
        <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
          (Me being Blair)
        </span>
      </CardTitle>
    </CardHeader>
    <CardContent></CardContent>
    <CardFooter className="flex-col items-start gap-1">
      Hi! I&apos;m a full stack developer with a preference for front end who has
      feature lead several complex projects and prides himself in reliability,
      adaptation, communication and making beautiful UI. I&apos;m currently
      unemployed and looking for a Front End heavy role in a Hybrid (3 day in
      office) environment to further develop my skills, create intuitive front
      end architectures and to continue creating beautiful UI and UXs
    </CardFooter>
  </HoverableCard>
);
