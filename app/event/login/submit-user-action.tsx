'use server';

import { cookies } from 'next/headers';
import { redirect, RedirectType } from 'next/navigation';
import { db } from '@/db';
import { usersTable } from '@/db/schema';

export const submitAndNavigate = async (formData: FormData) => {
  const cookieStore = cookies();
  const name = formData.get('name');

  const user: typeof usersTable.$inferInsert = {
    name: name?.toString() || '',
  };

  const insertedUser = await db.insert(usersTable).values(user).returning();

  // Set cookie
  cookieStore.set('user_name', insertedUser[0].name);
  cookieStore.set('user_id', insertedUser[0].id.toString());

  return redirect('event/event-select', RedirectType.push);
};
