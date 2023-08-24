require ('dotenv').config();

const connectDB = require('./db/connect');

const Product = require('./models/product');

const ProductJson = require('./product.json');

// define start function
const start = async() => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.create(ProductJson);
    }
    catch(error){
        console.log("error");
    }
}
// call a function
start();