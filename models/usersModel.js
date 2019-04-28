const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type:String, 
        required: [true, 'email is required']
    }, 
    password: {
        type:String, 
        required: [true, 'password is required']
    }

});

module.exports = mongoose.model('users', UserSchema);