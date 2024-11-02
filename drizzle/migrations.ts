import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator'
import { createClient } from '@libsql/client';
 
let url = process.env.NODE_ENV === "development" ? "file:./local.sqlite" : process.env.DB_PROD_URL || "";

const client = createClient({ url, authToken: process.env.DB_AUTH_TOKEN });
// console.log({client})
const db = drizzle(client);

async function main() {
  console.log("🚀 Drizzle DB Migrations starting...")
  await migrate(db, { migrationsFolder: "drizzle" })
  console.log("⭐️ Drizzle DB Migrations ended!")
}

main().catch(err => {
  console.error(err)
  process.exit(0)
})
