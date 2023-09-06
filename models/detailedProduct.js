const mongoose = require('mongoose');

const detailedProductSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    company: { type: String, required: true },
    price: { type: Number, required: true },
    colors: [{ type: String }],
    description: { type: String },
    category: { type: String, required: true },
    shipping: { type: Boolean },
    stock: { type: Number },
    reviews: { type: Number },
    stars: { type: Number },
    image: [
        {
            id: { type: String },
            width: { type: Number },
            height: { type: Number },
            url: { type: String },
            filename: { type: String },
            size: { type: Number },
            type: { type: String },
        },
    ],
});

module.exports = mongoose.model('DetailedProduct', detailedProductSchema);