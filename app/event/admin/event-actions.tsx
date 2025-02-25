'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { db } from '@/db';
import { eventsTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const createEvent = async (formData: FormData) => {
  const userId = cookies().get('user_id');
  if (!userId) {
    return {
      errors: 'no user oopsies',
    };
  }

  const event: typeof eventsTable.$inferInsert = {
    name: formData.get('event_name')?.toString() || 'name not found',
    active: true,
  };

  const insertedEvent = await db.insert(eventsTable).values(event).returning();

  revalidatePath('/event/admin');

  if (insertedEvent.length > 0) {
    return { message: 'event added' };
  }
};

export const deleteEvent = async (formData: FormData) => {
  const userId = cookies().get('user_id');
  if (!userId) {
    return {
      errors: 'no user oopsies',
    };
  }

  await db
    .delete(eventsTable)
    .where(eq(eventsTable.id, parseInt(JSON.stringify(formData.get('id')))));

  revalidatePath('/event/admin');

  return { message: 'event deleted' };
};
