function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "서버 내부 오류";

  res.status(statusCode).send(message);
}

module.exports = errorHandler;
