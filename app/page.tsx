'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import RainDropGenerator from '@/components/rain-drop-generator';
import { ThemeToggle } from '@/components/theme-toggle';

export const Page = () => {
  const router = useRouter();

  return (
    <div className="overscroll-none">
      <ThemeToggle />
      <div className="flex h-screen items-center justify-center">
        <Button
          variant={'outline'}
          className="z-10"
          onClick={() => router.push('/home')}
        >
          Enter
        </Button>
        <RainDropGenerator />
      </div>
    </div>
  );
};

export default Page;
