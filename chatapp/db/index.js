
'use strict';
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/chatdb',(error)=>{
    if(error)
    console.log('Error',error);
});

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    picture: String,
    active: Boolean
});

var UserModel = mongoose.model('Users',UserSchema);


module.exports = {mongoose,UserModel}