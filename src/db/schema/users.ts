import { integer, pgTable, unique, varchar } from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity({
      name: "users_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 2147483647,
      cache: 1,
    }),
    email: varchar("email", { length: 255 }).notNull().unique(),
    name: varchar("name", { length: 255 }).notNull(),
  },
  (table) => [unique("users_email_unique").on(table.email)]
);

// export type User = typeof users.$inferSelect;
// export type NewUser = typeof users.$inferInsert;
