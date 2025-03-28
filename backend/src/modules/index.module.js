<<<<<<< HEAD
import express from "express";
import healthCheckRouter from "./healthCheck.module.js";
import studyRouter from "./route/study.module.js";
import focusRouter from "./route/focus.module.js";
import habitRouter from "./route/habit.module.js";

const router = express.Router();

router.use("/health-check", healthCheckRouter);
router.use("/api", studyRouter); // http://localhost:5090/api/구현study라우터명/...
router.use("/api", focusRouter); // http://localhost:5090/api/구현focus라우터명/...
router.use("/api", habitRouter); // http://localhost:5090/api/구현habit라우터명/...

export default router;
=======
import express from "express";
import healthCheckRouter from "./healthCheck.module.js";
import editStudyModules from "./editStudyModules/editStudy.module.js";
import habitsRouter from "./habitModules/habits.module.js";
const router = express.Router();

router.use("/health-check", healthCheckRouter);
router.use("/api/habits", habitsRouter);
router.use("/api", editStudyModules);


export default router;
>>>>>>> d706a09 (feat: 습관 create 생성제한x &habitCreateAPI)
