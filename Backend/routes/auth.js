const router = require('express').Router();
const {registerUser, loginUser} = require('../controllers/auth');
const authorizeAdmin = require('../middlewares/authorizeAdmin')

router.post('/signin', authorizeAdmin, registerUser);
router.post('/login', loginUser);

module.exports = router; 