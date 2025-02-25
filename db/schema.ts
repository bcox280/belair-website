import { boolean, integer, json, pgTable, varchar } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
});

export const eventsTable = pgTable('events', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  active: boolean().notNull(),
});

export const datesTable = pgTable('selectedDates', {
  user_id: integer().notNull(),
  event_id: integer().notNull(),
  dates: json().$type<{ dates: Date[] }>().notNull(),
});
