const mongoose = require("mongoose");


const connectDB = async () => {
    mongoose.connect(
        "mongodb+srv://niteshprajapati:plvOeyvI7oZioy2S@nitesh.4iasx.mongodb.net/Uber"
    );
}

module.exports = connectDB;
// connectDB()