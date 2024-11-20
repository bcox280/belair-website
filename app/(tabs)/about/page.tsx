'use client';

import { EducationCard } from './education';
import { Hobbies } from './hobbies';
import { Me } from './me';
import { Skills } from './skills';
import { WorkCard } from './work';

// need to look into set sizes here just bcause its adding a bit of jank when new lines are added/removed
export const Page = () => {
  return (
    <div className="mx-auto grid h-5/6 grid-cols-[4fr_4fr_4fr] grid-rows-[4fr_4fr] gap-6 self-center px-6 duration-500 sm:px-8 [&:has(>*:nth-child(1):hover)]:grid-cols-[8fr_4fr_4fr] [&:has(>*:nth-child(1):hover)]:grid-rows-[8fr_4fr] [&:has(>*:nth-child(2):hover)]:grid-cols-[4fr_6fr_4fr] [&:has(>*:nth-child(2):hover)]:grid-rows-[6fr_4fr] [&:has(>*:nth-child(3):hover)]:grid-cols-[6fr_4fr_4fr] [&:has(>*:nth-child(3):hover)]:grid-rows-[4fr_4fr] [&:has(>*:nth-child(4):hover)]:grid-cols-[4fr_6fr_4fr] [&:has(>*:nth-child(4):hover)]:grid-rows-[4fr_4fr] [&:has(>*:nth-child(5):hover)]:grid-cols-[4fr_4fr_8fr] [&:has(>*:nth-child(5):hover)]:grid-rows-[4fr_4fr]">
      <Me />
      <WorkCard className="col-span-2" />
      <Skills />
      <Hobbies />
      <EducationCard />
    </div>
  );
};

export default Page;
