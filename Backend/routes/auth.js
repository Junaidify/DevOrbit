const router = require("express").Router();
const { registerUser, loginUser } = require("../controllers/auth");
const authorize = require("../middlewares/authorize");

router.post("/signin", registerUser);
router.post("/login", loginUser);

module.exports = router;
