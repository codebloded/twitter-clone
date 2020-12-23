const JWT= require('jsonwebtoken');
const User = require('../../Instagram-clone/models/User');
const {JWT_SECRET} =require('../config/dev')
module.exports = async(req,res, next)=>{
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(402).json({error:"You must be LoggedIn"});
    }
    const {token} = authorization.replace("Bearer","");
    JWT.verify(token, JWT_SECRET , async(err, payload)=>{
        if(err){
            return res.json({message:"You must be LoggedIn"});
        }
        const{_id} = payload;
        const userData = await User.findById(_id);
        req.user = userData;
        next();
    });
}