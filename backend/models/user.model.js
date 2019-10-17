const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 20
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    oeDescription: {
        type: String
    },
    profilePicture: {
        type: String,
        default: '/uploads/profile_pictures/default.png'
    }
});

module.exports = mongoose.model('User', userSchema);
