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
    <CardFooter className="flex-col items-start gap-1">
      I've got a few Hobbies Coffee Making BoardGames / Dnd Art Games
      Cooking/Baking
    </CardFooter>
  </HoverableCard>
);
