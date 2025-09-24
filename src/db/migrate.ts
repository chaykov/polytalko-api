import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./index";

async function main() {
  console.log("Running migrations...");
  await migrate(db, { migrationsFolder: "src/db/migrations" });
  console.log("Migrations complete!");
  process.exit(0);
}

main().catch((err) => {
  console.error("Migration error:", err);
  process.exit(1);
});
