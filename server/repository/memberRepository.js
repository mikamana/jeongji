import { db } from "../db/database.js";

export async function getMember() {
  const sql = ``;

  return await db.execute(sql, []).then((rows) => {
    rows[0];
  });
}
