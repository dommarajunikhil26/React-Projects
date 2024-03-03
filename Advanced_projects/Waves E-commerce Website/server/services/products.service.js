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

const getProductById = async(_id) => {
    try{
        const product = await Product.findById(_id).populate('brand') 
        if(!product) throw new ApiError(httpStatus.NOT_FOUND,'Product not found');
        return product;
    } catch(error){
        throw error;
    }
}

const updateProductById = async(id, body) => {
    try{
        const product = await Product.findOneAndUpdate(
            {_id},
            { "$set": body },
            { new: true } 
        );
        if(!product) throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
        return product
    } catch(error){
        throw error;
    }
}

const deleteProductById = async(body) => {
    try{
        const product = await Product.findByIdAndRemove(_id);
        if(!product) throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
        return product
    } catch(error){
        throw error;
    }
}

const allProducts = async(req) => {
    try {
        const products = await Product
        .find({})
        .populate('brand')
        .sort([
            [req.query.sortBy,req.query.order]
        ])
        .limit(parseInt(req.query.limit));

        return products
    } catch(error) {
        throw error
    }
}


module.exports = {
    addProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    allProducts
}