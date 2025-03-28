import express from "express";
<<<<<<< HEAD
import prisma from "@prisma/client";
=======
import prisma from "../../db/prisma/client.prisma.js";
>>>>>>> 4e1d11f (bugfix: 불필요한 임포트 제거)

const studyVerifyPassword = express.Router();

studyVerifyPassword.post("/verify-password", async (req, res) => {
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
  } catch (err) {
    next(err);
  }
});

export default studyVerifyPassword;
