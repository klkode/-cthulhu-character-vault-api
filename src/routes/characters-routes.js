const router = require("express").Router();

//Route for /characters
// GETs the characters list from the characters table
router.route("/").get((req, res) => {
    res.send('placeholder until characters retrieved');
});

module.exports = router;