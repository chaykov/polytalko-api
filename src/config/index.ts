import { z } from "zod";
import { config as load } from "dotenv";
load();

// const NODE_ENV = process.env.NODE_ENV || "development";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.string().default("3000"),
  DATABASE_URL: z.string().min(1),
  APP_NAME: z.string().default("polytalko-backend"),
  LOG_PRETTY: z.string().optional(),
  npm_package_version: z.string().default("0.0.0").optional(),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
  // @deprecated — Use the z.treeifyError(err) function instead.
  console.error("Invalid environment variables:", parsed.error.format());
  process.exit(1);
}

export default {
  nodeEnv: parsed.data.NODE_ENV,
  port: Number(parsed.data.PORT),
  databaseUrl: parsed.data.DATABASE_URL,
  appName: parsed.data.APP_NAME,
  logPretty: parsed.data.LOG_PRETTY === "true",
  version: parsed.data.npm_package_version,
};
