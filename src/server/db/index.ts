import * as schema from "./schema";
import { env } from "@/env";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const client = new Pool({
  connectionString: env.DATABASE_URL,
});

await client.connect();
export const db = drizzle(client, { schema });
