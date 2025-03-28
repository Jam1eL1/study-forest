import express from "express";
import prisma from "../../db/prisma/client.prisma.js";

const studyUpdate = express.Router();

studyUpdate.put("/study/:studyId/update", async (req, res) => {
  const data = req.body;

  try {
    const findedStudy = await prisma.study.findUnique({
      where: { id: data.id, password: data.password },
    });

    // findedStudy가 없는경우 얼리리턴 해주고
    if (!findedStudy) {
      return res
        .status(401)
        .json({ success: false, message: "비밀번호가 일치하지 않습니다." });
    }

    // 스터디 정보 업데이트
    const updatedStudy = await prisma.study.update({
      where: { id: data.id },
      data: {
        nickName: data.nickName,
        title: data.title,
        description: data.description,
        password: data.newPassword, // 새 비밀번호 업데이트 (비밀번호 확인 후)
        background: data.background,
      },
    });

    res.status(200).json({
      success: true,
      message: "스터디 정보가 성공적으로 업데이트되었습니다.",
      updatedStudy,
    });
  } catch (err) {
    next(err);
  }
});

export default studyUpdate;
