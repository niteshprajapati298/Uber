const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const captainModel = require('../models/captain');
const blackListToken = require('../models/blackListToken');


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Unothorized" });
    }
    const isBlackListed = await blackListToken.findOne({ token: token })
    if (isBlackListed) {
        res.status(401).json({ message: "unauthorized" })
    }
    try {
        const decoded = jwt.verify(token, "Uber@123")
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
    }
    catch (error) {
        return res.status(401).json({ message: "Unauthorized" })
    }
};
module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {        
       // Check if token is blacklisted
        const isBlackListed = await blackListToken.findOne({ token: token });
        if (isBlackListed) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // Verify token
        const decoded = jwt.verify(token, "Uber@123");
        const captain = await captainModel.findById(decoded._id);

        if (!captain) {
            return res.status(401).json({ message: "Captain not found" });
        }

        // Attach captain to request
        req.captain = captain;
        return next();
    } catch (error) {
        if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Invalid or expired token" });
        }
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};
