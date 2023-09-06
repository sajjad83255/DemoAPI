require ('dotenv').config();

const connectDB = require('./db/connect');

const Product = require('./models/product');

const ProductJson = require('./product.json');

const DetailedProduct = require('./models/detailedProduct');
const DetailedProductJson = require('./detailedProduct.json');

// define start function
const start = async() => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.create(ProductJson);
        await DetailedProduct.create(DetailedProductJson);
    }
    catch(error){
        console.log("error");
    }
}
// call a function
start();