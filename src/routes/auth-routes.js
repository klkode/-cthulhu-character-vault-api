const router = require("express").Router();
const authController = require("../controllers/auth-controller.js");

//Route for /users/resgister
// POST a new user into the users database and return a session token
router.route("/register").post(authController.userSignUp);
  
//Route for /users/login
// POST an existing user and verify their password and return a session token on success
router.route("/login").post(authController.userLogin);

module.exports = router;