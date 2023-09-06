const DetailedProduct = require('../models/detailedProduct');

const getDetailedProduct = async(req, res) =>{
    try {
        const productId = req.params.id;
        // const productId = req.query.id;
        const detailedProduct = await DetailedProduct.findOne({ id: productId });

        if (!detailedProduct) {
            return res.status(404).json({ message: 'Detailed product not found' });
        }

        res.status(200).json({ detailedProduct });
        // console.log({detailedProduct});
        
    } catch (error) {
        console.error('Error fetching detailed product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
module.exports = { getDetailedProduct};