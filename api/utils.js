import path from "path";
import { promises as fs } from "fs";

const dbPath = path.join(process.cwd(), "data", "db.json");

console.log("🔍 DB PATH:", dbPath);   // <-- Add this line

export async function readDB() {
  const data = await fs.readFile(dbPath, "utf8");
  return JSON.parse(data);
}

export async function writeDB(db) {
  await fs.writeFile(dbPath, JSON.stringify(db, null, 2), "utf8");
}
