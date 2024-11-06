import { forwardRef, useState } from 'react';
import { ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  HoverableCard,
} from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';

const AtlassianProject1 =
  "Designed and implemented a front end analytics measuring solution  which provided functionality for recording page render success/failures and timings, allowing us to judge the efficiency and reliability when rolling out new features and it's still the functionality we use to this date.";
const AtlassianProject2 =
  'Feature lead a project to allow customers to enable marketplace developers to view their production app logs while protecting PII. This lead to developers having an increased ability to debug their apps through our new logs page. Within a year, over half of all installed apps were sharing logs.';
const AtlassianProject3 =
  'After identifying a lack of a safe space with communicating about technical and non technical issues, I proposed and started running a lightweight agendaless meeting (Lean Coffee) to help acknowledge and solve these issues. This became a staple of our team and an unmissable meeting for our managers and existed for over two years.';
const AtlassianProject4 =
  'Provided mentorship to new team members, frequently pairing with them to help provide project/feature context and grow their front end skills. I mentored two new graduates and consistently offered and reached out to any new starters (including any in more senior positions) to provide them with structure while starting in a remote workplace';

const OlympicProject1 =
  'Designed and developed an architecture capable of providing updates on data in real-time to a Web App through the use of SignalR, Azure Functions and Azure Service Bus Queues';
const OlympicProject2 =
  'Modified existing sections of Olympics Document Exchange Web App to utilize real-time updates by supplying a service which managed a websockets connection to the API';
const OlympicProject3 =
  'Helped train the new interns to be accustomed to the technologies within Olympic and assisted with other employees in solving technical problems';

export const WorkCard = ({ className }: { className: string }) => {
  const [isAtlassianOpen, setIsAtlassianOpen] = useState(false);
  const [isOlympicOpen, setIsOlympicOpen] = useState(false);

  return (
    <HoverableCard className={className}>
      <CardHeader className="space-y-0 pb-2">
        <CardTitle className="text-4xl tabular-nums">Work Experience</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <div className="flex w-full justify-between p-4">
          <div className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Atlassian - Software Engineer
          </div>
          <CardDescription>Jan 2020 - Mar 2024</CardDescription>
        </div>
        <Separator />

        <Collapsible
          open={isAtlassianOpen}
          onOpenChange={setIsAtlassianOpen}
          className="w-full space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Projects
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li className="px-4 py-3 text-sm">{AtlassianProject1}</li>
            <CollapsibleContent className="space-y-2">
              <li className="px-4 py-3 text-sm">{AtlassianProject2}</li>
              <li className="px-4 py-3 text-sm">{AtlassianProject3}</li>
              <li className="px-4 py-3 text-sm">{AtlassianProject4}</li>
            </CollapsibleContent>
          </ul>
        </Collapsible>

        <Separator />

        <div className="flex w-full justify-between p-4">
          <div className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Olympic Software - Software Engineering Intern
          </div>
          <CardDescription>Nov 2017 - Sep 2019</CardDescription>
        </div>
        <Separator />

        <Collapsible
          open={isOlympicOpen}
          onOpenChange={setIsOlympicOpen}
          className="w-full space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Projects
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li className="px-4 py-3 text-sm">{OlympicProject1}</li>
            <CollapsibleContent className="space-y-2">
              <li className="px-4 py-3 text-sm">{OlympicProject2}</li>
              <li className="px-4 py-3 text-sm">{OlympicProject3}</li>
            </CollapsibleContent>
          </ul>
        </Collapsible>
      </CardFooter>
    </HoverableCard>
  );
};
