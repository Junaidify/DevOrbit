const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers['authorization']?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized : Invalid or missing token" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decode;
    next();
  } catch (err) {
    console.log("Failed to authenticate user", err);
    return res.status(401).json({ message: "Invalid auth credientials" });
  }
};

module.exports = {authenticate}
