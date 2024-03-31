require("dotenv").config();
const jwt = require("jsonwebtoken");

const { JWT_KEY } = process.env;

/**
 * authorize is a middleware function to check that the token is authenticated or else the request should not be processed because the user isn't validated.
 * 
 * @param {Object}      req 
 * @param {Object}      res 
 * @param {Object}      next
 */
function authorize(req, res, next) {
    // Get the authorization token from the header
    const { authorization } = req.headers;
    const token = authorization.slice("Bearer ".length);

    // Verify the token
    try {
        const payload = jwt.verify(token, JWT_KEY);
        req.decode = payload;
        next();

    } catch (error) {
        res.status(401).json({ error: "User not validated." })

    }

}

module.exports = { authorize };