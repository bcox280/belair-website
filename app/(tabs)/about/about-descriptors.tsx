import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { GithubIcon, LinkedinIcon, TvIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ClickableCard } from '@/components/ui/card';
import { CommandItem } from '@/components/ui/command';
import { Separator } from '@/components/ui/separator';

import { CardProps, PageItemProps } from '../types';

export const AboutString = 'about';

const AboutInfo = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between h-24">
      <div>Find out all the information you need to hire Blair Cox</div>

      <div className="flex flex-row">
        <Button
          variant="outline"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            router.push('https://github.com/bcox280');
          }}
        >
          <GithubIcon />
        </Button>
        <Separator orientation="vertical" className="mx-4 h-6 w-px" />
        <Button
          variant="outline"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();

            router.push('https://www.linkedin.com/in/blair-cox-64932a118/');
          }}
        >
          <LinkedinIcon />
        </Button>

        <Separator orientation="vertical" className="mx-4 h-6 w-px" />
        <Button
          variant="outline"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <TvIcon />
        </Button>
      </div>
    </div>
  );
};

export const AboutPageItem = ({ onSelect }: PageItemProps) => {
  return (
    <CommandItem
      sidePanel={<AboutInfo />}
      value={AboutString}
      onSelect={() => onSelect(`/${AboutString}`)}
      key={`${AboutString}-item`}
    >
      <span>About</span>
    </CommandItem>
  );
};

export const AboutCard = ({ navigate, ...props }: CardProps) => {
  return (
    <ClickableCard
      {...props}
      onClick={() => navigate(AboutString)}
      cardContent={''}
      cardFooter={<AboutInfo />}
      cardHeader={'About Blair'}
      cardTitle={'Blair Cox'}
    ></ClickableCard>
  );
};
