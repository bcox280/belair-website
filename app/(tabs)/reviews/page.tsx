'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

type Review = {
  review: string;
  obfuscatedName: string;
  occupation: string;
  category: string;
  company: string;
};

const reviews = [
  {
    review: `"Blair is a pleasure to work with. He's reliable, personable, and can seek out what he needs. He requires basically no oversight and I can just trust that what he agrees to, gets done"`,
    obfuscatedName: 'A. M.',
    occupation: 'Software Engineer',
    category: 'Work Friend',
    company: 'Atlassian/Olympic Software',
  },
  {
    review: `"I loved pairing with blair on any task, he'd make it fun working on any problem and I was always learning from the sharp way he approached problems, he's also as genuine as he is tall"`,
    obfuscatedName: 'N. H.',
    occupation: 'Software Engineer',
    category: 'Work Friend & Mentor',
    company: 'Atlassian',
  },
  {
    review: `"Blair is a pleasure to work with. He's reliable, personable, and can seek out what he needs. He requires basically no oversight and I can just trust that what he agrees to, gets done"`,
    obfuscatedName: 'A. M.',
    occupation: 'Software Engineer',
    category: 'Work Friend',
    company: 'Atlassian/Olympic Software',
  },
];

const UserDetail = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="grid flex-1 auto-rows-min overflow-hidden pr-2">
      <div className="text-sm lg:text-lg">{title}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  );
};

const Page = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      className="w-full max-w-[48rem] animate-in zoom-in"
    >
      <CarouselContent className="ml-[-1rem] flex">
        {reviews.map((review, index) => (
          <CarouselItem className="flex-[0_0_70%] p-1" key={index}>
            <div>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-lg lg:text-3xl">{review.review}</span>
                </CardContent>
                <CardFooter>
                  <div className="flex w-full gap-0.5 px-4">
                    <UserDetail
                      title={'Name'}
                      description={review.obfuscatedName}
                    />
                    <Separator
                      orientation="vertical"
                      className="mx-2 h-10 w-px"
                    />
                    <UserDetail
                      title={'Occupation'}
                      description={review.occupation}
                    />
                    <Separator
                      orientation="vertical"
                      className="mx-2 h-10 w-px"
                    />
                    <UserDetail
                      title={'Company'}
                      description={review.company}
                    />
                    <Separator
                      orientation="vertical"
                      className="mx-2 h-10 w-px"
                    />
                    <UserDetail
                      title={'Category'}
                      description={review.category}
                    />
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Page;
