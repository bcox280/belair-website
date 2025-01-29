import { CardFooter } from '@/components/ui/card';

export const Hobbies = ({ title }: { title: React.ReactNode }) => (
  <>
    <CardFooter className="flex-col items-start gap-1 text-xl font-semibold tracking-tight">
      I&apos;ve got a few....
      <div className="pl-2 pt-2">
        <ul
          className={
            'my-6 ml-6 list-disc text-base font-normal text-muted-foreground [&>li]:mt-2'
          }
        >
          <li>Coffee Making (To a sadly pretentious level)</li>
          <li>Boardgames & D&D</li>
          <li>Cooking/Baking</li>
          <li>Video games</li>
          <li>Hiking</li>
          <li>Futsal/Soccer</li>
        </ul>
      </div>
    </CardFooter>
  </>
);
