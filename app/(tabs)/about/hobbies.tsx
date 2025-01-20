import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  HoverableCard,
} from '@/components/ui/card';

export const Hobbies = () => (
  <HoverableCard>
    <CardHeader className="space-y-0 pb-2">
      <CardTitle className="text-4xl tabular-nums">Hobbies</CardTitle>
    </CardHeader>
    <CardContent></CardContent>
    <CardFooter className="flex-col items-start gap-1 text-xl font-semibold tracking-tight">
      I&apos;ve got a few....
      <div className={'pl-2 pt-2'}>
        <div className={'text-lg tracking-tight text-muted-foreground'}>
          Coffee Making (To a sadly pretentious level)
        </div>
        <div className={'text-lg tracking-tight text-muted-foreground'}>
          Boardgames & D&D
        </div>
        <div className={'text-lg tracking-tight text-muted-foreground'}>
          Cooking/Baking
        </div>
        <div className={'text-lg tracking-tight text-muted-foreground'}>
          Video games
        </div>
        <div className={'text-lg tracking-tight text-muted-foreground'}>
          Hiking
        </div>
        <div className={'text-lg tracking-tight text-muted-foreground'}>
          Futsal/Soccer
        </div>
      </div>
    </CardFooter>
  </HoverableCard>
);
