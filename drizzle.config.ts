import { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/db/*.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
