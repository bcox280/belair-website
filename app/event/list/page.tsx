import { db } from '@/db';
import { eventsTable } from '@/db/schema';

import { EventList } from './event-list';

interface Props {}

const EventHomePage: React.FC<Props> = async ({}) => {
  const events = await db.select().from(eventsTable);

  return (
    <div className="flex flex-col space-y-4">
      {events.map((event, index) => (
        <EventList event={event} key={index} />
      ))}
    </div>
  );
};

export default EventHomePage;
