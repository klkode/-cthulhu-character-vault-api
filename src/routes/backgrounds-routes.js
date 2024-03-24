const router = require("express").Router();
const backgroundsController = require("../controllers/backgrounds-controller.js");

//Route for /backgrounds
// GETs the backgrounds list from the backgrounds table
router.route("/").get(backgroundsController.getAllBackgrounds);

module.exports = router;