import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

// @ts-ignore
export default defineConfig({
  out: './drizzle',
  schema: './drizzle/schema.ts',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
});