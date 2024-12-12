const captainModel = require("../models/captain");

module.exports.createCaptain = async ({
    firstName, lastName, email, password, color, plate, capacity, vehicleType
}) => {
    if (!firstName || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain = captainModel.create({
        email,
        fullName: { firstName, lastName },
        password,
        vehicle: { color, plate, capacity, vehicleType }
    })
    return captain;
}