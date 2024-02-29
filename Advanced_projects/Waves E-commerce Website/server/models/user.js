const mongoose = require('mongoose');
const validator = require('validator'); //validator of strings and sanitizer 
require('dotenv').config();

const userSchema =  mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 10,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    firstname: {
        type: String,
        maxLength: 100,
        trim: true,
        default: ''
    },
    lastname: {
        type: String,
        maxLength: 100,
        trim: true,
        default: ''
    },
    cart: {
        type: Array,
        default: []
    },
    history: {
        type: Array,
        default: []
    },
    verified: {
        type: Boolean,
        default: false
    } 
});

const User = mongoose.model('User', userSchema);