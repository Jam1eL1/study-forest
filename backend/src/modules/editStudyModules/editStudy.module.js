import express from "express";
import prisma from "@prisma/client";

const editStudyModules = express.Router();

editStudyModules.post("/verify-password", async (req, res) => {
  const { userId, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId, password: password },
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "사용자를 찾을 수 없습니다." });
    }

    if (password) {
      res
        .status(200)
        .json({ success: true, message: "비밀번호가 일치합니다." });
    } else {
      res
        .status(401)
        .json({ success: false, message: "비밀번호가 일치하지 않습니다." });
    }
  } catch (error) {
    console.error("비밀번호 검증 중 오류 발생", error);
    res
      .status(500)
      .json({ success: false, message: "서버 오류가 발생했습니다." });
  }
});

export default editStudyModules;
