import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import config from "./config";

const PORT = config.port || 3000;

const server = app.listen(PORT, () => {
  console.log(
    `Server listening on http://localhost:${PORT} (env=${config.nodeEnv})`
  );
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
  server.close(() => process.exit(1));
});
