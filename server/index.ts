import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // When running from dist/index.js, __dirname is "dist/". Vite builds to dist/public/.
  // Default to production when running from dist/ so deploy works without NODE_ENV.
  const isProduction =
    process.env.NODE_ENV === "production" || path.basename(__dirname) === "dist";
  const staticPath = isProduction
    ? path.resolve(__dirname, "public")
    : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    const indexHtml = path.join(staticPath, "index.html");
    res.sendFile(indexHtml, (err) => {
      if (err && !res.headersSent) {
        console.error("Failed to send index.html:", err);
        res.status(500).send("App not built or wrong path. Run: pnpm build");
      }
    });
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
