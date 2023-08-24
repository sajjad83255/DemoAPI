// we are going to define our getAllProducts function

const Product = require('../models/product');

const getAllProducts = async(req, res) => {
    // models.find({}): is method used to get all data from database of that model.
    // req.quer: is mostly used for searching,sorting,filtering, paagination etc.
    const myData = await Product.find(req.query);
    res.status(200).json({myData});
};

const getAllProductsTesting = async(req, res) => {
    const myData = await Product.find(req.query);
    res.status(200).json({myData})
};

module.exports = {getAllProducts, getAllProductsTesting};