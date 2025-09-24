import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema/users";
import config from "../config";

const pool = new Pool({
  connectionString: config.databaseUrl,
  ssl: config.nodeEnv == "production" ? { rejectUnauthorized: false } : false,
  max: 10,
});

export const db = drizzle(pool, { schema });
