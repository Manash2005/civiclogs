const errorHandler = (err, req, res, next) => {

  // If status code is still 200,
  // change it to 500
  const statusCode =
    res.statusCode === 200
      ? 500
      : res.statusCode;

  res.status(statusCode);

  res.json({
    success: false,
    message: err.message,

    // Show stack only in development
    stack:
      process.env.NODE_ENV === "production"
        ? null
        : err.stack,
  });
};

export default errorHandler;