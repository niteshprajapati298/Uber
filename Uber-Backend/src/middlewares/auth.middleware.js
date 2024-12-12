const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.authUser = async (req,res,next) => {
    const token = req.cookies.token||req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message:"Unothorized"});

    }
    const isBlackListed = await userModel.findOne({token:token})
    if(isBlackListed){
        res.status(401).json({message:"unauthorized"})
    }
    try{
        const decoded = jwt.verify(token,"Uber@123")
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();

    }
    catch(error){
 return res.status(401).json({message:"Unauthorized"})
    }
}