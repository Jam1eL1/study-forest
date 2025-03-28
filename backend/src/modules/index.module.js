const express = require("express");
const healthCheckRouter = require("./healthCheck.module");

const router = express.Router();

router.use("/health-check", healthCheckRouter);

module.exports = router;
