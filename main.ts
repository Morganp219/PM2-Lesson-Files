// @deno-types="npm:@types/express"
import express from "npm:express"
// @deno-types="npm:@types/cors"
import cors from "npm:cors";

const app = express()
app.use(cors());
app.use(express.json());

const PORT = parseInt(Deno.env.get("PORT") || "1252", 10);
app.get("/", (_req, res) => {
  res.send("Hello PM2!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});