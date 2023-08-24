require('dotenv').config();
// to access express module
const express = require("express");

// express function
// to create application in express we need to call express function
const app = express();

// get connectDB
const connectDB = require('./db/connect');

const PORT = process.env.PORT  || 5000;

const product_routes = require('./routes/product');

app.get("/", (req, res) =>{
    res.send("Hey, I am connected")
});

app.use("/api/products" , product_routes);

// here we are defining our start function
const start = async() => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () =>{
            console.log(`${PORT} Yes, I am Connected`)
        });
    } catch(error) {
        console.log(error);
    }
}

// here we called a function called start
start();