const moongose = require('mongoose');

const userSchema = moongose.Schema({
    name:{
        type:String,
        required:true,
    }, 
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    dob:{
        type:Date,
        required:true
    }
})

const User =  moongose.model('User', userSchema);
module.exports = User;