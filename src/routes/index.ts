import { Router } from "express";
import healthRouter from "./health.router";

const router = Router();

router.use("/health", healthRouter);

// later mount -> router.use('/users', usersRouter)

export default router;
