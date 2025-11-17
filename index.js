import jsonServer from "json-server";
import corsMiddleware from "./cors.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();

// db.json is in the same folder
const router = jsonServer.router(path.join(__dirname, "db.json"));

const middlewares = jsonServer.defaults();

// Render uses process.env.PORT
const PORT = process.env.PORT || 5000;

server.use(jsonServer.bodyParser);
server.use(corsMiddleware);
server.use(middlewares);

server.use(router);

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📁 DB loaded from: ${path.join(__dirname, "db.json")}`);
});