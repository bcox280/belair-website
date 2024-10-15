'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import RainDropGenerator from '@/components/rain-drop-generator';
import { ThemeToggle } from '@/components/theme-toggle';

export const Page = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex h-screen flex-col overflow-hidden overscroll-none">
      <ThemeToggle />
      <div className="flex h-full items-center justify-center">
        <Button
          variant={'enter'}
          className="z-10 duration-300 hover:-translate-y-1 hover:scale-110 hover:animate-pulse"
          onClick={() => {
            setClicked(true);
            setTimeout(() => router.push('/home'), 3000);
          }}
        >
          <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full overflow-hidden rounded-full bg-primary transition-all duration-500 ease-in-out group-hover:translate-y-14"></span>

          <span className="z-10 font-semibold text-foreground">Enter</span>
          {/** animation isnt on parent because then delay cant be overwritten. just a tailwind gotcha */}
          {clicked ? (
            <div className="absolute inline-flex h-full w-full *:absolute *:inline-flex *:h-full *:w-full *:rounded-md *:border-2 *:border-primary *:opacity-0">
              <span className="animate-ripple-large"></span>
              <span className="animate-ripple-large delay-150"></span>
              <span className="animate-ripple-large delay-300"></span>
              <span className="animate-ripple-large delay-500"></span>
              <span className="animate-ripple-large delay-700"></span>
            </div>
          ) : (
            <></>
          )}
        </Button>
        {/** dunno if i like this or not? */}
        {clicked ? <></> : <RainDropGenerator />}
      </div>
    </div>
  );
};

export default Page;
