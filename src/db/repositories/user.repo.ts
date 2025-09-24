import { db } from "../index";
import { sql } from "drizzle-orm";

export type User = {
  id: string;
  email: string;
  password_hash: string;
  created_at: Date;
};

export const createUser = async (user: {
  id: string;
  email: string;
  password_hash: string;
}) => {
  await db.execute(
    sql`INSERT INTO users (id, email, password_hash, created_at) VALUES (${user.id}, ${user.email}, ${user.password_hash}, now())`
  );
};

export const findUserByEmail = async (email: string) => {
  const res = await db.execute(
    sql`SELECT id, email, password_hash,, created_at FROM users WHERE email = ${email}`
  );

  return res.rows[0] as User | undefined;
};
