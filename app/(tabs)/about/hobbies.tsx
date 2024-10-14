import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const Hobbies = () => (
  <div>
    <CardHeader className="space-y-0 pb-2">
      <CardTitle className="text-4xl tabular-nums">Hobbies</CardTitle>
    </CardHeader>
    <CardContent></CardContent>
    <CardFooter className="flex-col items-start gap-1">
      I've got a few Hobbies Coffee Making BoardGames / Dnd Art Games
      Cooking/Baking
    </CardFooter>
  </div>
);
