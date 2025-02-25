'use server';

import { cookies } from 'next/headers';
import { redirect, RedirectType } from 'next/navigation';
import { db } from '@/db';
import { datesTable } from '@/db/schema';

export const submitDates = async (dates: Date[], event_id: string) => {
  const userId = cookies().get('user_id');

  const date: typeof datesTable.$inferInsert = {
    dates: { dates },
    user_id: parseInt(userId?.value || '-1'),
    event_id: parseInt(event_id),
  };

  const insertedDate = await db.insert(datesTable).values(date).returning();

  console.log(insertedDate);

  return redirect('./list', RedirectType.push);
};
