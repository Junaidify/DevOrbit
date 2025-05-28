const router = require("express").Router();

// routes 
const { registerUser, loginUser } = require("../controllers/auth");
const { profile } = require("../controllers/profile");

// middlewares
const {authenticate} = require("../middlewares/authenticate");

// auths 
router.post("/signin", registerUser);
router.post("/login", loginUser);

// profile routes
router.post("/profile", authenticate, profile);

module.exports = router;
