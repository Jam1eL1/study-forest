import express from "express";

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

export default healthCheckRouter;
