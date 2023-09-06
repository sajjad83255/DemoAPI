// get express
const express = require('express');

// get router
const router = express.Router();

// importing function
const {getDetailedProduct} = require('../controllers/detailedProduct');

// define routes
// router.route("/detailedProduct").get(getAllDetailedProducts);

router.route("/:id").get(getDetailedProduct);

// export
module.exports = router;