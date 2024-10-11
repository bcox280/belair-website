import { useRouter } from 'next/navigation';

import { AboutCard } from '../about/about-descriptors';
import { ArtCard } from '../art/art-descriptors';
import { CoffeeFinderCard } from '../coffee-finder/coffee-finder-descriptors';

export const Projects = () => {
  const router = useRouter();

  return (
    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[20rem] lg:grid-cols-1 xl:max-w-[20rem]">
        <AboutCard navigate={router.push} className="lg:max-w-md" />
        <ArtCard navigate={router.push} className="flex flex-col lg:max-w-md" />
      </div>

      <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
        <CoffeeFinderCard navigate={router.push} className="lg:max-w-md" />
      </div>
    </div>
  );
};

export default Projects;
