import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { AboutCard } from '../about/about-descriptors';
import { ArtCard } from '../art/art-descriptors';
import { CoffeeFinderCard } from '../coffee-finder/coffee-finder-descriptors';
import { LoadingContext } from '../layout';

export const Projects = () => {
  const router = useRouter();

  return (
    <div className="mx-auto grid grid-cols-[2fr_2fr] grid-rows-[2fr_2fr] items-start justify-center gap-6 p-6 *:lg:max-w-[20rem]">
      <AboutCard
        navigate={router.push}
        className="h-full duration-300 animate-in zoom-in hover:z-20 hover:-translate-y-1 hover:scale-110"
      />
      <ArtCard
        navigate={router.push}
        className="h-full duration-300 animate-in zoom-in hover:z-20 hover:-translate-y-1 hover:scale-110"
      />
      <CoffeeFinderCard
        navigate={router.push}
        className="h-full duration-300 animate-in zoom-in hover:z-20 hover:-translate-y-1 hover:scale-110"
      />
    </div>
  );
};

export default Projects;
