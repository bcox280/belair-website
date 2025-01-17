import { useRouter } from 'next/navigation';

import { AboutCard } from '../about/about-descriptors';
import { LoadingCard } from '../loading-descriptors';
import { ReviewsCard } from '../reviews/reviews-descriptors';

export const Projects = () => {
  const router = useRouter();

  return (
    <div className="mx-auto grid max-w-[40rem] grid-cols-[2fr_2fr] grid-rows-[2fr_2fr] items-start justify-center gap-6 p-6">
      <AboutCard
        navigate={router.push}
        className="col-span-2 h-full duration-300 animate-in zoom-in hover:z-20 hover:-translate-y-1 hover:scale-110"
      />
      <ReviewsCard
        navigate={router.push}
        className="h-full duration-300 animate-in zoom-in hover:z-20 hover:-translate-y-1 hover:scale-110"
      />
      {/* <ArtCard
        navigate={router.push}
        className="h-full duration-300 animate-in zoom-in hover:z-20 hover:-translate-y-1 hover:scale-110"
      />
      <CoffeeFinderCard
        navigate={router.push}
        className="h-full duration-300 animate-in zoom-in hover:z-20 hover:-translate-y-1 hover:scale-110"
      /> */}
      <LoadingCard
        navigate={router.push}
        className="h-full duration-300 animate-in zoom-in hover:z-20 hover:-translate-y-1 hover:scale-110"
      />
    </div>
  );
};

export default Projects;
