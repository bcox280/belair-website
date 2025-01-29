import { cn } from '@/lib/utils';
import { CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const Me = ({
  className,
  title,
}: {
  className?: string;
  title?: React.ReactNode;
}) => (
  <div className={cn('col-span-3', className)}>
    <CardFooter className="flex-col items-start gap-1">
      <div>
        Heya! I&apos;m a full stack developer with a preference for front end
        who has feature lead several complex projects and prides himself in
        reliability, adaptation, communication and making beautiful UI. I&apos;m
        currently unemployed and looking for a Front End heavy role in a Hybrid
        (3 day in office) environment to further develop my skills, create
        intuitive front end architectures and to continue creating beautiful UI
        and UXs
      </div>
      <div className={'scroll-m-20 pt-4 text-xl font-semibold tracking-tight'}>
        This Site
      </div>
      <div>
        Welcome to my website and/or portfolio. It&apos;s a locally hosted
        website that I&apos;ve built from scratch. It&apos;s built with Next.js,
        Tailwind CSS, React, and TypeScript. This is a little playground for me
        to try out new technologies and to build small random things I have an
        interest in. Don&apos;t expect this to be the fanciest thing ever, or
        with a perfect UX (Like why would I have a ghost flying around the
        screen, and a secret way to turn on sirens if that were the case:p)
      </div>
    </CardFooter>
  </div>
);
