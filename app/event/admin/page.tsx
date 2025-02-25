import { db } from '@/db';
import { eventsTable } from '@/db/schema';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { createEvent, deleteEvent } from './event-actions';

interface Props {}

const EventHomePage: React.FC<Props> = async ({}) => {
  const events = await db.select().from(eventsTable);

  return (
    <>
      <form
        className="flex h-full w-2/5 flex-col items-center justify-center space-y-4"
        action={createEvent}
      >
        <Input
          type="text"
          required
          name="event_name"
          placeholder="Enter the event name"
        />
        <Button type="submit">Create Event</Button>
      </form>

      <form
        className="flex h-full w-2/5 flex-col items-center justify-center space-y-4"
        action={deleteEvent}
      >
        <div className="flex flex-col space-y-4">
          {events.map((event) => (
            <div className="flex flex-row space-x-4">
              <div>{event.active}</div>
              <div>{event.name}</div>

              <Button>Delete</Button>
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default EventHomePage;
