import { Request, Response, NextFunction } from "express";

type AsyncFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export default (fn: AsyncFn) =>
  (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
