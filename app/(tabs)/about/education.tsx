import { CardDescription, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const DateDisplay = ({ label, date }: { label: string; date: string }) => (
  <div className="flex flex-col gap-0.5">
    <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
      {label}
    </div>
    <div className="text-xs text-muted-foreground">{date}</div>
  </div>
);

const EducationItem = ({
  institution,
  description,
  startDate,
  endDate,
}: {
  institution: string;
  description: string;
  startDate: string;
  endDate: string;
}) => (
  <>
    <div className="w-full flex-auto">{institution}</div>
    <Separator />
    <div className="flex w-full flex-row justify-between py-4 pl-4">
      <CardDescription>{description}</CardDescription>
      <div className="flex flex-col gap-0.5 justify-self-end pl-4 @sm:flex-row @sm:px-4">
        <DateDisplay label="Start" date={startDate} />
        <Separator className="my-2 h-px w-full @sm:mx-2 @sm:my-0 @sm:h-10 @sm:w-px" />
        <DateDisplay label="Finish" date={endDate} />
      </div>
    </div>
  </>
);

export const EducationCard = ({ title }: { title: React.ReactNode }) => (
  <>
    <CardFooter className="w-full flex-col items-start gap-1 @container ">
      <EducationItem
        institution="University of Auckland"
        description="Bachelor of Engineering (Hons) - Software Engineering"
        startDate={'Mar 2015'}
        endDate={'Nov 2020'}
      ></EducationItem>
      <EducationItem
        institution="Lynfield College"
        description="Merit Endorsement + Biology Scholarship"
        startDate={'Jan 2009'}
        endDate={'Jan 2014'}
      ></EducationItem>
    </CardFooter>
  </>
);
