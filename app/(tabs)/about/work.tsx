import { useState } from 'react';
import { ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { CardDescription, CardFooter } from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';

const AtlassianProjects = [
  "Designed and implemented a front end analytics measuring solution  which provided functionality for recording page render success/failures and timings, allowing us to judge the efficiency and reliability when rolling out new features and it's still the functionality we use to this date.",
  'Feature lead a project to allow customers to enable marketplace developers to view their production app logs while protecting PII. This lead to developers having an increased ability to debug their apps through our new logs page. Within a year, over half of all installed apps were sharing logs.',
  'After identifying a lack of a safe space with communicating about technical and non technical issues, I proposed and started running a lightweight agendaless meeting (Lean Coffee) to help acknowledge and solve these issues. This became a staple of our team and an unmissable meeting for our managers and existed for over two years.',
  'Provided mentorship to new team members, frequently pairing with them to help provide project/feature context and grow their front end skills. I mentored two new graduates and consistently offered and reached out to any new starters (including any in more senior positions) to provide them with structure while starting in a remote workplace',
];

const OlympicProjects = [
  'Designed and developed an architecture capable of providing updates on data in real-time to a Web App through the use of SignalR, Azure Functions and Azure Service Bus Queues',
  'Modified existing sections of Olympics Document Exchange Web App to utilize real-time updates by supplying a service which managed a websockets connection to the API',
  'Helped train the new interns to be accustomed to the technologies within Olympic and assisted with other employees in solving technical problems',
];

interface WorkExperienceProps {
  title: string;
  role: string;
  dateRange: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  projects: string[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  title,
  role,
  dateRange,
  isOpen,
  onOpenChange,
  projects,
}) => {
  return (
    <>
      <div className="flex w-full justify-between py-4">
        <div className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {role}
        </div>
        <CardDescription>{dateRange}</CardDescription>
      </div>
      <Separator className="mb-2" />

      <Collapsible
        open={isOpen}
        onOpenChange={onOpenChange}
        className="w-full space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <div className="scroll-m-20 text-xl font-semibold tracking-tight">
            {title}
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <ul className="my-3 ml-6 list-disc [&>li]:mt-1">
          <li className="px-4 py-3 text-sm">{projects[0]}</li>
          <CollapsibleContent className="space-y-1 *:px-4 *:py-1 *:text-sm">
            {projects.slice(1).map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </CollapsibleContent>
        </ul>
      </Collapsible>
    </>
  );
};

export const WorkCard = ({
  className,
  title,
}: {
  className: string;
  title: React.ReactNode;
}) => {
  const [isAtlassianOpen, setIsAtlassianOpen] = useState(false);
  const [isOlympicOpen, setIsOlympicOpen] = useState(false);

  return (
    <div>
      <CardFooter className="flex-col items-start gap-1">
        <WorkExperience
          title="Projects"
          role="Atlassian - Software Engineer"
          dateRange="Jan 2020 - Mar 2024"
          isOpen={isAtlassianOpen}
          onOpenChange={setIsAtlassianOpen}
          projects={AtlassianProjects}
        />
        <WorkExperience
          title="Projects"
          role="Olympic Software - Software Engineering Intern"
          dateRange="Nov 2017 - Sep 2019"
          isOpen={isOlympicOpen}
          onOpenChange={setIsOlympicOpen}
          projects={OlympicProjects}
        />
      </CardFooter>
    </div>
  );
};
