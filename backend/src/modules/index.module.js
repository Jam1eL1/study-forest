import express from "express";
import healthCheckRouter from "./healthCheck.module.js";
import editStudyModules from "./editStudyModules/editStudy.module.js";
import habitsRouter from "./habitModules/habits.module.js";
const router = express.Router();

router.use("/health-check", healthCheckRouter);
router.use("/api/habits", habitsRouter);
router.use("/api", editStudyModules);


export default router;
