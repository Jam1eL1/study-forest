<<<<<<< HEAD
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
=======
>>>>>>> 1dc27b2 (feat: 스터디 업데이트 모듈 구현)
import express from "express";
import healthCheckRouter from "./healthCheck.module.js";
import editStudyModules from "./editStudyModules/editStudy.module.js";
import habitsRouter from "./habitModules/habits.module.js";
const router = express.Router();

router.use("/health-check", healthCheckRouter);
router.use("/api/habits", habitsRouter);
router.use("/api", editStudyModules);


export default router;
<<<<<<< HEAD
>>>>>>> d706a09 (feat: 습관 create 생성제한x &habitCreateAPI)
=======
=======
import express from "express";
import healthCheckRouter from "./healthCheck.module.js";
<<<<<<< HEAD
import studyVerifyPassword from "./editStudyModules/studyVerifyPassword.module.js";
import studyUpdate from "./editStudyModules/studyUpdate.module.js";
=======
import studyRouter from "./route/study.module.js";
import focusRouter from "./route/focus.module.js";
import habitRouter from "./route/habit.module.js";
>>>>>>> 19fa891 (refactor: 라우터 세부라우터로 분리)

const router = express.Router();

router.use("/health-check", healthCheckRouter);
<<<<<<< HEAD
router.use("/api", studyVerifyPassword); // http://localhost:5090/api/verify-password
router.use("/api", studyUpdate); // http://localhost:5090/api/study/{studyId}/update
=======
router.use("/api", studyRouter); // http://localhost:5090/api/구현study라우터명/...
router.use("/api", focusRouter); // http://localhost:5090/api/구현focus라우터명/...
router.use("/api", habitRouter); // http://localhost:5090/api/구현habit라우터명/...
>>>>>>> 19fa891 (refactor: 라우터 세부라우터로 분리)

export default router;
>>>>>>> 83b45e2 (feat: 스터디 업데이트 모듈 구현)
>>>>>>> 1dc27b2 (feat: 스터디 업데이트 모듈 구현)
