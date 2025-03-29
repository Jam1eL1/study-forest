import express from "express";
import prisma from "../../db/prisma/client.prisma.js";

const studyVerifyPassword = express.Router();

studyVerifyPassword.post("/", async (req, res, next) => {
  const { studyId, encryptedPassword } = req.body;

  try {
    const study = await prisma.study.findUnique({
      where: {
        id: parseInt(studyId),
        encryptedPassword: encryptedPassword,
      },
    });

    if (!study) {
      return res.status(404).json({
        success: false,
        message: "스터디 또는 비밀번호가 일치하지 않습니다.",
      });
    }

    res.status(200).json({ success: true, message: "비밀번호가 일치합니다." });
  } catch (err) {
    next(err);
  }
});

export default studyVerifyPassword;
