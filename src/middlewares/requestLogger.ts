import { Request, Response, NextFunction } from "express";
import logger from "../core/logger";

declare global {
  namespace Express {
    interface Request {
      log: typeof logger;
    }
  }
}

export default (req: Request, res: Response, next: NextFunction) => {
  req.log = logger.child({ reqId: Date.now(), route: req.path });
  req.log.info(
    { method: req.method, url: req.originalUrl },
    "incoming request"
  );
  next();
};
