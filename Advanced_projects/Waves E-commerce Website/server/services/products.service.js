const { Product } = require('../models/product');
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');

const addProduct = async(body) => {
    try{
        const product = Product({
            ...body
        })
        await product.save();
        return product;
    } catch(error){
        throw error;
    }
}

module.exports = {
    addProduct
}