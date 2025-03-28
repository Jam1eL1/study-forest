const express = require("express");
const router = require("./modules/index.module");
const errorHandler = require("./middlewares/errorHandler.module");

const app = express();
const PORT = 5090;

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`${PORT} 실행됨!`);
});
