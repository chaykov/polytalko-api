import { Request, Response, NextFunction } from "express";
import { ApiError, ErrorType } from "../core/ApiError";

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);

  if (err instanceof ApiError) {
    switch (err.type) {
      case ErrorType.BAD_REQUEST:
        return res.status(400).json({ status: "error", message: err.message });
      case ErrorType.NOT_FOUND:
        return res.status(404).json({ status: "error", message: err.message });
      default:
        return res.status(500).json({ status: "error", message: err.message });
    }
  }

  // fallback
  res.status(500).json({ status: "error", message: "Internal Server Error" });
}
