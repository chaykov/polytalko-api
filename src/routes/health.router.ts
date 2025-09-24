import { Router, Request, Response } from "express";
import config from "../config";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    app: config.appName,
    version: config.version,
  });
});

export default router;
