// import mongoose from mongoose package
const mongoose = require('mongoose');

// create a function
const connectDB = (uri) =>{
    console.log ("Ajj se ham developer !!!");
    // return our url using .connect method
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connectDB;