const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { selectFields } = require('express-validator/lib/field-selection');
const userSchema = new mongoose.Schema({
    fullName: {
        firstName :{
            type:String,
            required:true,
            minlength:[3,'First name must be at least 3 characters long']
        },
        lastName:{
           type:String,
           minlength:[3,'First name be at least 3 characters long']
        }
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
        select:false,
    },
   
    socketId: {
        type: String, // Used for real-time notifications
        default: null,
    },
     
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically


userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this.id},"Uber@123")
    return token;
}
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password)
}
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10)
}
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
