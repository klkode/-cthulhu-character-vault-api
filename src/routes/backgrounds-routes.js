const router = require("express").Router();

//Route for /backgrounds
// GETs the backgrunds list from the backgrounds table
router.route("/").get((req, res) => {
    res.send('placeholder until backgrounds retrieved');
});

module.exports = router;