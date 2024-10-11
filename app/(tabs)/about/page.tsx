'use client';

import { Separator } from '@/components/ui/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components//ui/card';

import { EducationCard } from './education';
import { WorkCard } from './work';

// import { Separator } from '@/components//ui/separator';

const CardTest = ({ index, name }: { index: number; name: string }) => (
  <div>
    <CardHeader className='space-y-0 pb-2'>
      <CardDescription>Today</CardDescription>
      <CardTitle className='text-4xl tabular-nums'>
        {index}
        {name}
        <span className='font-sans text-sm font-normal tracking-normal text-muted-foreground'>
          offers have been sent to blair
        </span>
      </CardTitle>
    </CardHeader>
    <CardContent></CardContent>
    <CardFooter className='flex-col items-start gap-1'>
      Bla bla bla
      <div className='flex flex-row border-t p-4'>
        <CardDescription>Words words words words words words</CardDescription>
        <div className='grid flex-1 auto-rows-min gap-0.5'>
          <div className='text-xs text-muted-foreground'>Exercise</div>
          <div className='flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none'>
            73
            <span className='text-sm font-normal text-muted-foreground'>
              min
            </span>
          </div>
        </div>
        <Separator orientation='vertical' className='mx-2 h-10 w-px' />
        <div className='grid flex-1 auto-rows-min gap-0.5'>
          <div className='text-xs text-muted-foreground'>Stand</div>
          <div className='flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none'>
            14
            <span className='text-sm font-normal text-muted-foreground'>
              hr
            </span>
          </div>
        </div>
        <Separator orientation='vertical' className='mx-2 h-10 w-px' />
        <div className='flex-1 auto-rows-min gap-0.5'>
          <div className='text-xs text-muted-foreground'>Stand</div>
          <div className='flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none'>
            14
            <span className='text-sm font-normal text-muted-foreground'>
              hr
            </span>
          </div>
        </div>
      </div>
      <CardTitle className=' text-4xl tabular-num hidden group-hover/skills:block  '>
        hahahahahahaha
      </CardTitle>
    </CardFooter>
  </div>
);

export const Page = () => {
  return (
    <div className='mx-auto grid grid-cols-[4fr_4fr_4fr] grid-rows-[4fr_4fr_4fr] [&:has(>*:nth-child(1):hover)]:grid-cols-[8fr_4fr_4fr] [&:has(>*:nth-child(1):hover)]:grid-rows-[8fr_4fr_4fr] [&:has(>*:nth-child(2):hover)]:grid-cols-[4fr_6fr_4fr] [&:has(>*:nth-child(2):hover)]:grid-rows-[6fr_4fr_4fr] [&:has(>*:nth-child(3):hover)]:grid-cols-[6fr_4fr_4fr] [&:has(>*:nth-child(3):hover)]:grid-rows-[4fr_6fr_4fr] [&:has(>*:nth-child(4):hover)]:grid-cols-[4fr_6fr_4fr] [&:has(>*:nth-child(4):hover)]:grid-rows-[4fr_6fr_4fr] [&:has(>*:nth-child(5):hover)]:grid-cols-[4fr_4fr_8fr] [&:has(>*:nth-child(5):hover)]:grid-rows-[4fr_8fr_4fr] duration-500 items-start justify-center gap-6 p-6 sm:p-8'>
      <Card className=' transition ease-in-out min-h-full min-w-full hover:-translate-y-1 hover:bg-primary/90 duration-500'>
        <p></p>
        <CardTest index={0} name={'Me'} />
      </Card>

      <Card className='min-h-full min-w-full flex flex-col hover:-translate-y-1 col-span-2 hover:bg-primary/90 duration-500'>
        <CardTest index={1} name={'Hobbies'} />
      </Card>
      <Card className='min-h-full min-w-full hover:-translate-y-1 hover:bg-primary/90 duration-500'>
        <EducationCard />
      </Card>

      <Card className='min-h-full min-w-full hover:-translate-y-1 hover:bg-primary/90  duration-500'>
        <WorkCard />
      </Card>
      <Card className='group/skills min-h-full min-w-full hover:-translate-y-1 hover:bg-primary/90  duration-500'>
        <CardTest index={4} name={'Skills'} />
      </Card>
    </div>
  );
};

export default Page;
