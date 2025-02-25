import { db } from '@/db';
import { eventsTable } from '@/db/schema';

export const GET = async () => {
  const events = await db.select().from(eventsTable);

  return events;
};
