module.exports = function (req, res, next) {
  res.header("Access-Controle-Allow-Origin", "*");
  res.header(
    "Access-Controle-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Controle-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};
