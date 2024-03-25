require("dotenv").config();
const jwt = require("jsonwebtoken");

const { JWT_KEY } = process.env;

function authorize(req, res, next) {
    // Get the authorization token from the header
    const { authorization } = req.headers;
    const token = authorization.slice("Bearer ".length);
    // console.log(token);

    // Verify the token
    try {
        const payload = jwt.verify(token, JWT_KEY);
        req.decode = payload;
        //   console.log(req.decode);
        next();

    } catch (error) {

        res.status(401).json({ error: "User not validated." })

    }

}

module.exports = { authorize };