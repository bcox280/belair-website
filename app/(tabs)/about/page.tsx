'use client';

import { Card } from '@/components//ui/card';

import { EducationCard } from './education';
import { Hobbies } from './hobbies';
import { Me } from './me';
import { Skills } from './skills';
import { WorkCard } from './work';

// need to look into set sizes here just bcause its adding a bit of jank when new lines are added/removed
export const Page = () => {
  return (
    <div className="mx-auto grid grid-cols-[4fr_4fr_4fr] grid-rows-[4fr_4fr_4fr] items-start justify-center gap-6 p-6 duration-500 sm:p-8 [&:has(>*:nth-child(1):hover)]:grid-cols-[8fr_4fr_4fr] [&:has(>*:nth-child(1):hover)]:grid-rows-[8fr_4fr_4fr] [&:has(>*:nth-child(2):hover)]:grid-cols-[4fr_6fr_4fr] [&:has(>*:nth-child(2):hover)]:grid-rows-[6fr_4fr_4fr] [&:has(>*:nth-child(3):hover)]:grid-cols-[6fr_4fr_4fr] [&:has(>*:nth-child(3):hover)]:grid-rows-[4fr_6fr_4fr] [&:has(>*:nth-child(4):hover)]:grid-cols-[4fr_6fr_4fr] [&:has(>*:nth-child(4):hover)]:grid-rows-[4fr_6fr_4fr] [&:has(>*:nth-child(5):hover)]:grid-cols-[4fr_4fr_8fr] [&:has(>*:nth-child(5):hover)]:grid-rows-[4fr_4fr_4fr]">
      <Card className="min-h-full min-w-full transition duration-500 ease-in-out animate-in zoom-in hover:-translate-y-1 hover:bg-primary">
        <Me />
      </Card>

      <Card className="col-span-2 min-h-full min-w-full duration-500 animate-in zoom-in hover:-translate-y-1 hover:bg-primary">
        <WorkCard />
      </Card>

      <Card className="min-h-full min-w-full duration-500 animate-in zoom-in hover:-translate-y-1 hover:bg-primary">
        <Skills />
      </Card>

      <Card className="min-h-full min-w-full duration-500 animate-in zoom-in hover:-translate-y-1 hover:bg-primary">
        <Hobbies />
      </Card>

      <Card className="min-h-full min-w-full  duration-500 animate-in zoom-in hover:-translate-y-1 hover:bg-primary">
        <EducationCard />
      </Card>
    </div>
  );
};

export default Page;
