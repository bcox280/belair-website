import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  HoverableCard,
} from '@/components/ui/card';

export const Skills = () => (
  <HoverableCard>
    <CardHeader className="space-y-0 pb-2">
      <CardTitle className="text-4xl tabular-nums">Skills</CardTitle>
    </CardHeader>
    <CardContent></CardContent>
    <CardFooter className="flex-col items-start gap-1">
      Technical Skills, Languages, Concepts, Frameworks, Loading Spinner ya ya
      ya
    </CardFooter>
  </HoverableCard>
);
