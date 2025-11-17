import { readDB, writeDB } from "./utils.js";

export default async function handler(req, res) {
  const db = await readDB();

  if (req.method === "GET") {
    return res.status(200).json(db.income);
  }

  if (req.method === "POST") {
    const newItem = { id: Date.now(), ...req.body };
    db.income.push(newItem);
    await writeDB(db);
    return res.status(201).json(newItem);
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
