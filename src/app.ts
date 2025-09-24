import express, { Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes";
import errorHandler from "./middlewares/errorHandler";
import requestLogger from "./middlewares/requestLogger";
import rateLimit from "express-rate-limit";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter), app.use(morgan("dev"));

app.use(requestLogger);

app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.json({ ok: true, message: "Polytalko backend is up. See /api/health" });
});

app.use(errorHandler);

export default app;
