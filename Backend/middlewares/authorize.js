const jwt = require("jsonwebtoken");

function authorize(req, res, next) {
  const token = req.cookies.token || req.headers.authorizeAdmin?.split(" ")[1];

  if (!token) {
    return res.status(400).json({ message: "Unauthorized" });
  }

  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode;
    next();
  } catch (err) {
    console.error("Error : In authorize middle", err);
    return res.status(400).json({ message: "Invalid token" });
  }
}

module.exports = authorize;
