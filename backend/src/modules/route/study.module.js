import express from "express";
import studyVerifyPassword from "../editStudyModules/studyVerifyPassword.module.js";
import studyUpdate from "../editStudyModules/studyUpdate.module.js";
import studyGetRouter from "../study/studyGet.module.js";

const studyRouter = express.Router();

studyRouter.use("/verify-password", studyVerifyPassword); // http://localhost:5090/api/verify-password
studyRouter.use("/:id/update", studyUpdate); // http://localhost:5090/api/study/{studyId}/update
studyRouter.use("/study", studyGetRouter); // http://localhost:5090/api/study

export default studyRouter;
