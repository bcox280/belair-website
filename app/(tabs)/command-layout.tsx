import { useEffect, useState } from 'react';
import * as React from 'react';
import { useRouter } from 'next/navigation';

import {
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

import { AboutPageItem } from './about/about-descriptors';
import { HomePageItem } from './home/about-descriptors';
import { LoadingPageItem } from './loading-descriptors';
import { ReviewsPageItem } from './reviews/reviews-descriptors';

export const CommandLayout = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [hasBeenUsed, setHasBeenUsed] = useState(false);
  const [value, setValue] = useState('art');

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const closeAndNavigate = (route: string) => {
    setOpen(false);
    router.push(route);
  };

  // this was a bit cheeky, needed it to be called as a function so that
  // i dont need to unwrap it and grab the props further in. But I want the
  // resulting "CommandItem". I need better type safety here tho
  const pageItems: React.ReactElement<typeof CommandItem>[] = [
    AboutPageItem({ onSelect: closeAndNavigate }),
    // ArtPageItem({ onSelect: closeAndNavigate }),
    // CoffeeFinderPageItem({ onSelect: closeAndNavigate }),
    ReviewsPageItem({ onSelect: closeAndNavigate }),
    LoadingPageItem({ onSelect: closeAndNavigate }),
    HomePageItem({ onSelect: closeAndNavigate }),
  ];

  return (
    <div className="container z-10 flex max-w-full flex-row justify-end self-end p-0">
      <CommandDialog
        open={open}
        onOpenChange={(val) => {
          if (!hasBeenUsed) {
            setHasBeenUsed(true);
          }
          setOpen(val);
        }}
        value={value}
        onValueChange={(v) => setValue(v)}
      >
        <CommandInput placeholder="Go to another page" />
        <CommandList
          pages={pageItems}
          value={value}
          className={'flex flex-row'}
        />
      </CommandDialog>
      <div
        className={`flex gap-2 pb-4 pr-4 text-sm text-muted-foreground ${!hasBeenUsed ? 'animate-pulse' : ''}`}
      >
        Navigate:{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </div>
    </div>
  );
};
