const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    let token = req.headers["authorization"];

    if (token) {
        token = token.split(" ")[1];

        try {
            const decoded = await jwt.verify(token, process.env.SECRET_KEY); // Wait for the token to be verified
            console.log(decoded);
            req.user = decoded; // Set the decoded user data in the request object
            next(); // Proceed to the next middleware or route handler
        } catch (err) {
            return res.status(400).json({ message: "Invalid token" });
        }
    } else {
        return res.status(400).json({ message: "Token not provided" });
    }
};

module.exports = verifyToken;
