const captainModel = require('../models/captain');
const { validationResult } = require('express-validator');
const captainService = require('../services/captain.services');
const blackListToken = require('../models/blackListToken');
module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const {
        email,
        fullName,
        password,
        vehicle,
    } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: "Captain Already Exists" })
    }
    const hashedPassword = await captainModel.hashPassword(password)
    const captain = await captainService.createCaptain({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });
    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });

}
module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const captain = await captainModel.findOne({ email }).select('+password');
        if (!captain) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = captain.generateAuthToken();
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict' });
        res.status(200).json({ token, captain });
    } catch (error) {
        next(error); // Ensure any unexpected errors are passed to the error handler
    }
};

module.exports.getCaptainProfile = async (req,res,next) => {
    const captain = req.captain
    
    res.status(400).json({captain})

}
module.exports.logoutCaptain = async (req,res,next) => {
    const token = req?.cookies?.token || req?.headers?.authorization?.split(' ')?.split[1];
    await blackListToken.create({token});
    res.clearCookie('token');
    res.status(200).json({message:'Logout successfully'})

}