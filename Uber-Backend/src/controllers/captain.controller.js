const captainModel = require('../models/captain');
const {validationResult} = require('express-validator');
const captainService = require('../services/captain.services')
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

    const isCaptainAlreadyExist = await captainModel.findOne({email});
    if(isCaptainAlreadyExist){
        return res.status(400).json({message:"Captain Already Exists"})
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