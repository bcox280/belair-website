import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

import { client } from '.';

async function main() {
  await migrate(drizzle(client), {
    migrationsFolder: './db/migrations',
  });

  await client.end();
}

main();
