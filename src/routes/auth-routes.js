const router = require("express").Router();

//Route for /users
// POST
router.route("/").get((req, res) => {
    res.send('placeholder until auth finished');
});

module.exports = router;