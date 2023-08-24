// mongo instance
const mongoose = require('mongoose');

// need to define our schema means structure of our tables or document
const productSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required: true
        },

        price:{
            type : Number,
            required: [true,"price must be entered"]
        },

        featured:{
            type : Boolean,
            required: false
        },

        rating:{
            type : Number,
            default: 4.9
        },

        createdAt:{
            type: Date,
            default: Date.now()
        },

        company: {
            type: String,
            // enum is a string object with values chosen from a list of premitted valuse that are enumertaed explicity in the column specification at table creation time.
            enum : {
                values: ["Apple", "Samsung", "Dell", "Amazon"],
                message: `{values} is not supported`
            },
        },
    }
);

module.exports = mongoose.model("Product", productSchema);

// Now we ahve to add our schema into a