import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { usersTable } from '@/db/schema';
import { sql } from 'drizzle-orm';

export const POST = async (request: NextRequest, res: NextResponse) => {
  const formData = await request.formData();
  const name = formData.get('name');

  const user: typeof usersTable.$inferInsert = {
    name: name?.toString() || '',
  };

  const insertedUser = await db.insert(usersTable).values(user).returning();
  console.log('New user created!');

  return NextResponse.json({ id: insertedUser[0].id });
};
