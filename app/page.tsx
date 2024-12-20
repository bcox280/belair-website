'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import RainDropGenerator from '@/components/rain-drop-generator';
import { ThemeToggle } from '@/components/theme-toggle';

export const Page = () => {
  const router = useRouter();
  const [show, setShow] = useState(true);

  return (
    <div className="flex h-screen flex-col overflow-hidden overscroll-none">
      <ThemeToggle />

      <AnimatePresence>
        {show ? (
          <motion.div
            exit={{ opacity: 0, scale: 0 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex h-full items-center justify-center"
          >
            <>
              <Button
                variant={'enter'}
                className="z-10"
                onClick={() => {
                  setShow(false);
                  setTimeout(() => {
                    router.push('/home');
                  }, 300);
                }}
              >
                {/* <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full overflow-hidden rounded-full bg-primary transition-all duration-500 ease-in-out group-hover:translate-y-14"></span> */}

                <span className="z-10 font-semibold text-secondary-foreground">
                  Enter
                </span>
              </Button>
              <RainDropGenerator />
            </>
          </motion.div>
        ) : //interesting quirk, this needs to be null for framer to animate correctly between states.
        null}
      </AnimatePresence>
    </div>
  );
};

export default Page;
