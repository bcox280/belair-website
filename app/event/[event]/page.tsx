import { redirect } from 'next/navigation';
import { db } from '@/db';
import { eventsTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

import { Event } from './event-calendar';

interface Props {
  params: { event: string };
}
const EventHomePage: React.FC<Props> = async ({
  params: { event: event_id },
}) => {
  const event = await db
    .select()
    .from(eventsTable)
    .where(eq(eventsTable.id, parseInt(event_id)));

  if (event.length === 0) {
    redirect('/event/list');
  }

  return <Event event_id={event_id} />;
};

export default EventHomePage;
