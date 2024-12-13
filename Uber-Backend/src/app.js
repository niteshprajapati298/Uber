const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/database");
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes');
const cookieParser = require('cookie-parser')
connectDB()
app.use(cookieParser())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

app.get('/',(req,res)=>{
    res.send("hello world");
});

module.exports = app;
