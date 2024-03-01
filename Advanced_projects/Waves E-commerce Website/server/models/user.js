const mongoose = require('mongoose');
const validator = require('validator'); //validator of strings and sanitizer 
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

// Intercepting the user and hasing the password
userSchema.pre('save', async function(next){
    let user = this;

    if(user.isModified('password')){
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
    
        user.password = hash;
    }

    next();
});

// In methods we have previous data
userSchema.methods.generateAuthToken = function(){
    let user = this;
    const userObj = { sub: user._id.toHexString() };
    const token = jwt.sign(userObj, process.env.SECRET_PASSWORD, {expiresIn: '1d'});

    return token;
}


// In statics we don't have the previous data.
userSchema.statics.emailTaken = async function(email){
    const user = await User.findOne({email})
    return !!user;
}

userSchema.methods.comparePassword = async function(candidatePassword){
    /// candidate password = unhashed password.
    const user = this;
    const match = await bcrypt.compare(candidatePassword, user.password);
    return match;
}

const User = mongoose.model('User', userSchema);

module.exports = {User};