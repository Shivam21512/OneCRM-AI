const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    email2: {
        type: String,
        unique: true,
        sparse: true // allows multiple null values
    },
    phone: {
        type: Number,
        unique: true,
        required: true
    },
    phone2: {
        type: Number,
        unique: true,
        sparse: true // allows multiple null values
    },
    
    stage: {
        type: Number,
        enum: [1, 2, 0],
        default: 1 // 1 - lead, 2 - customer, 0 - fail 
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active' // it is for customers - active or inactive
    },
    description: {
        type: String,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
    Services: [{
        type: Schema.Types.ObjectId,
        ref: "Service"
    }],
    remarks: [{
        type: String,
        timestamp: { type: Date, default: Date.now }
    }],
  // each admin or emp fetch user data on the basis of his remarsk there behaviour is genereated using ai 
}, { timestamps: true });



const User = mongoose.model("User", userSchema);

module.exports = User;