const express = require("express");
// const prisma = require("../db/prisma/client.prisma"); // 프리즈마 사용하려면 먼저 임포트해야 합니다. 주석 지우고 사용하세요. `Ctrl + /` 누르면 주석 토글 가능.

const healthCheckRouter = express.Router();

/**
 * Health-Check
 */
healthCheckRouter.get("/", (req, res, next) => {
  try {
    console.log("OK");
    res.status(200).send("헬스체크 성공!");
  } catch (e) {
    next(e);
  }
});

module.exports = healthCheckRouter;
