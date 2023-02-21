const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "Carl000181@$$1&*", (err, user) => {
      if (err) {
        return res.send({ message: "Unauthorized", code: 401 });
      }

      req.user = user;
      next();
    });
  } else {
    res.send({ message: "Unauthorized", code: 401 });
  }
};

module.exports = verifyToken;
