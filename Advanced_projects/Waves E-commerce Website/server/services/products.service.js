const { Product } = require('../models/product');
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');
const mongoose  = require('mongoose');

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
        let sortCriteria = {};
        const sortBy = req.query.sortBy ? req.query.sortBy : 'createdAt'; // Default sorting field
        const order = req.query.order === 'desc' ? -1 : 1; // Default sorting order

        sortCriteria[sortBy] = order;

        const products = await Product
        .find({})
        .populate('brand')
        .sort(sortCriteria) // Adjusted to use the constructed sort criteria object
        .limit(parseInt(req.query.limit) || 10); // Provide a default limit if not specified

        return products;
    } catch(error) {
        throw error;
    }
}


const paginateProducts = async(req) => {
    try{

                // const example = {
        //     "keywords":"elite",
        //     "brand":["605ad1e70738255874af0972","605ad1e70738255874af0972"],
        //     "lt":200,
        //     "gt":500,
        //     "frets":24
        // }

        let aggQueryArray = [];

        if(req.body.keywords && req.body.keywords != ''){
            const re = new RegExp(`${req.body.keywords}`, 'gi');
            aggQueryArray.push({
                $match: {model: {$regex: re}}
            });
        }

        if(req.body.brand && req.body.brand.length > 0){
            // we pass id as string in body. But mongo needs it as ObjectId()
            // so we do it as below.
            let newBrandsArray = req.body.brand.map((item) => (
                mongoose.Types.ObjectId(item)
            ));
            aggQueryArray.push({
                $match: {brand: {$in: newBrandsArray}}
            });
        }

        if(req.body.frets && req.body.frets > 0){
            aggQueryArray.push({
                $match: {frets: {$in: req.body.frets}}
            });
        }

        if(req.body.min && req.body.min > 0 || req.body.max && req.body.max < 5000){
            /// { $range: { price:[0,100 ]}} /// not supported

            if(req.body.min){
                aggQueryArray.push({ $match: { price:{ $gt: req.body.min }}});
                /// minimum price , guitar with a price greater than xxx
            }
            if(req.body.max){
                aggQueryArray.push({ $match: { price:{ $lt: req.body.max }}});
                /// maximum price , guitar with a price lower than xxx
            }
        }

        //// add populate
        aggQueryArray.push(
            {$lookup:
                {
                    from: "brands",
                    localField: "brand",
                    foreignField:"_id",
                    as: "brand"
                }
            },
            { $unwind: '$brand'}
        )    


        let aggQuery = Product.aggregate(aggQueryArray);
        const options = {
            page: req.body.page,
            limit: 9,
            sort:{date: 'desc'}
        };
        const products = await Product.aggregatePaginate(aggQuery, options);
        return products;
    } catch(error){
        throw error;
    }
}

module.exports = {
    addProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    allProducts,
    paginateProducts
}