import { useState } from 'react';
import { ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';

export const WorkCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <CardHeader className="space-y-0 pb-2">
        <CardTitle className="text-4xl tabular-nums">Work Experience</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <div className="flex flex-row p-4">
          <div className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Atlassian - Software Engineer
          </div>
          <CardDescription>Jan 2020 - Mar 2024</CardDescription>
        </div>
        <Separator></Separator>

        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px] space-y-2"
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
            <li className="px-4 py-3 text-sm">Project 1</li>
            <CollapsibleContent className="space-y-2">
              <li className="px-4 py-3 text-sm">Project 2</li>
              <li className="px-4 py-3 text-sm">Project 3</li>
            </CollapsibleContent>
          </ul>
        </Collapsible>
      </CardFooter>
    </div>
  );
};
