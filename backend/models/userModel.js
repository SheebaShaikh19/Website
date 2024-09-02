const mongoose = require("mongoose");

// Create Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    booking_date: {
        type: Date,
        required: true
    },
    booking_time: {
        type: String, // Using String to store time
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    end_time: {
        type: String, // Using String to store time
        required: true
    },
    contact_number: {
        type: String, // Using String to handle leading zeros in phone numbers
        required: true
    }
}, { timestamps: true });

// Create Model
const User = mongoose.model('User', userSchema);
module.exports = User;
