import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  HoverableCard,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const EducationCard = () => (
  // Extract this out
  <HoverableCard className="overflow-hidden">
    <CardHeader className="space-y-0 pb-2">
      <CardDescription> Where did Blair go to school?</CardDescription>
      <CardTitle className="text-4xl tabular-nums">Education</CardTitle>
    </CardHeader>
    <CardContent></CardContent>
    <CardFooter className="w-full flex-col items-start gap-1">
      <div className="w-64 flex-auto">University of Auckland</div>
      <Separator />
      <div className="flex w-full flex-row justify-between p-4">
        <CardDescription>
          Bachelor of Engineering (Hons) - Software Engineering
        </CardDescription>
        <div className="flex flex-row gap-0.5 px-4">
          <div className="grid flex-1 auto-rows-min pr-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              Start
            </div>
            <div className="text-xs text-muted-foreground">Mar 2015</div>
          </div>
          <Separator orientation="vertical" className="mx-2 h-10 w-px" />
          <div className="grid flex-1 auto-rows-min gap-0.5 pl-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              Finish
            </div>
            <div className="text-xs text-muted-foreground">Nov 2020</div>
          </div>
        </div>
      </div>

      <div className="w-full flex-auto">Lynfield College</div>
      <Separator />
      <div className="flex w-full flex-row justify-between p-4">
        <CardDescription>
          Merit Endorsement + Biology Scholarship
        </CardDescription>
        <div className="flex flex-row gap-0.5 px-4">
          <div className="grid flex-1 auto-rows-min pr-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              Start
            </div>
            <div className="text-xs text-muted-foreground">Jan 2009</div>
          </div>
          <Separator orientation="vertical" className="mx-2 h-10 w-px" />
          <div className="grid flex-1 auto-rows-min gap-0.5 pl-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              Finish
            </div>
            <div className="text-xs text-muted-foreground">Jan 2014</div>
          </div>
        </div>
      </div>
    </CardFooter>
  </HoverableCard>
);
