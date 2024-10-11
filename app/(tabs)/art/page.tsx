'use client';

import * as React from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const Page = () => {
  // also add a picker for the type in top left.
  // and above we have a description of the section
  // and each card has a title as well
  return (
    <div className="flex flex-col">
      <div className="pl-[12rem]">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Pokemon</SelectItem>
            <SelectItem value="dark">Abstract</SelectItem>
            <SelectItem value="system">Water Colours</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex-1 pt-10 text-4xl font-semibold leading-none tracking-tight">
          This is Pokemon fix centering plz
        </div>
      </div>

      <div className="flex grow items-center justify-center self-center">
        <Carousel opts={{ loop: true }} className="w-full max-w-[48rem]">
          <CarouselContent className="ml-[-1rem] flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem className="flex-[0_0_70%] p-1" key={index}>
                <div>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        Art goes here lol
                      </span>
                    </CardContent>
                    <CardFooter>This is the art description</CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Page;
