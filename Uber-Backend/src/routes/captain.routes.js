const express = require('express');
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');

const router = express.Router();

router.post('/register', [
    body('email')
        .isEmail()
        .withMessage('Invalid Email'),
    body('fullName.firstName')
        .isLength({ min: 3 })
        .withMessage('First name must be at least 3 characters long'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    body('vehicle.color')
        .isLength({ min: 3 })
        .withMessage('Vehicle color must be at least 3 characters long'),
    body('vehicle.plate')
        .isLength({ min: 3 })
        .withMessage('Vehicle plate must be at least 3 characters long'),
    body('vehicle.capacity')
        .isInt({ min: 1 })
        .withMessage('Vehicle capacity must be at least 1'),
    body('vehicle.vehicleType')
        .isIn(['car', 'motorcycle', 'auto'])
        .withMessage('Vehicle type must be one of car, motorcycle, or auto')
], 
    captainController.registerCaptain
);

// router.post('/login', [
//     body('email')
//         .isEmail()
//         .withMessage('Invalid Email'),
//     body('password')
//         .isLength({ min: 6 })
//         .withMessage('Password must be at least 6 characters long')
// ], 
//     captainController.loginCaptain
// );

module.exports = router;