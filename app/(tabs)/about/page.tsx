'use client';

import React from 'react';

import { HoverableCard } from '@/components/ui/card';

import { EducationCard } from './education';
import { Hobbies } from './hobbies';
import { Me } from './me';
import { Skills } from './skills';
import { WorkCard } from './work';

const ResumeCards = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => {
        const childElement = child as React.ReactElement;
        return (
          <HoverableCard
            title={childElement.props.title}
            className={childElement.props.className}
            key={index}
          >
            {child}
          </HoverableCard>
        );
      })}
    </>
  );
};

const Page = () => {
  return (
    // God this is ugly lol. thank god for the extension to hide tailwind classes
    <div className="m-auto grid h-5/6 max-w-[1200px] grid-cols-[4fr_4fr_4fr_4fr] grid-rows-[4fr_4fr] gap-6 px-6 duration-500 sm:px-8 [&:has(>*:nth-child(1):hover)]:grid-cols-[8fr_4fr_4fr_4fr] [&:has(>*:nth-child(1):hover)]:grid-rows-[8fr_4fr] [&:has(>*:nth-child(2):hover)]:grid-cols-[2fr_2fr_2fr_6fr] [&:has(>*:nth-child(2):hover)]:grid-rows-[6fr_4fr] [&:has(>*:nth-child(3):hover)]:grid-cols-[6fr_6fr_4fr_4fr] [&:has(>*:nth-child(3):hover)]:grid-rows-[4fr_6fr] [&:has(>*:nth-child(4):hover)]:grid-cols-[2fr_2fr_8fr_4fr] [&:has(>*:nth-child(4):hover)]:grid-rows-[4fr_4fr] [&:has(>*:nth-child(5):hover)]:grid-cols-[4fr_4fr_4fr_6fr] [&:has(>*:nth-child(5):hover)]:grid-rows-[4fr_6fr]">
      <ResumeCards>
        <Me
          className="col-span-3"
          title={
            <>
              Me{' '}
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                (Me being Blair)
              </span>
            </>
          }
        />
        <Skills className="col-span-1" title="Skills" />
        <WorkCard className="col-span-2" title="Work Experience" />
        <EducationCard title="Education" />
        <Hobbies title="Hobbies" />
      </ResumeCards>
    </div>
  );
};

export default Page;
