const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const captainSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, "FirstName must be at least 3 character long"],
        },
        lastName: {
            type: String,
            minlength: [3, "lastName must 3 be at least 3 character long"]
        },

    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function (email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: "Invalid email format",
        },
    },
    password: {
        type: String,
        required: true,
        select: false,
    },

    socketId: {
        type: String, // Used for real-time notifications
        default: null,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color must be at 3 least 3 character long'],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'Plate must be at least 3 character long']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must at least 1']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        }
    },
    location: {
        lat: {
            type: Number,

        },
        lng: {
            type: Number,
        }
    }

});
captainSchema.methods.generateAuthToken = function() {

    const token = jwt.sign({_id:this.id},"Uber@123",{expiresIn:'24h'})
    return token;   
};
captainSchema.methods.comparePassword = async function(passwordHash){
    return await bcrypt.compare(password,this.password)
};
captainSchema.statics.hashPassword = async function (password) {
     return await bcrypt.hash(password,10)
};

const captainModel = mongoose.model('captain',captainSchema)
module.exports = captainModel;