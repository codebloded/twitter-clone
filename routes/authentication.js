const express = require('express');
const JWT = require('jsonwebtoken');
const { findOne } = require('../models/user');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router()
const {JWT_SECRET} = require('../config/dev')
// ==================SIGNUP ROUTE=============
router.get('/t', (req, res)=>{
    res.send({message:"Hemllo"})
});

router.post('/signup', async(req,res)=>{
    req.header('Content-Type', 'application/json');
    const{name,email,password} = req.body;
    if(!name || !email || !password ){
        return res.json({error:"Please fill all the fields"});
    }
    try {
        const savedUser = await User.findOne({email:email})
        if(savedUser){
            return res.json({error:"User Already exist with this email"});
        }
        const hashPassword = await bcrypt.hash(password,12);
        const user = new User({
            name,
            email,
            password:hashPassword,
        });
        user.save().then(user=>{
            res.json({message:"User saved sucessfully!"});
        }).catch(err=>{
            res.json({error:err});
        })
    } catch (error) {
        res.json({err:error});
    }
});

// =============================LOGIN ROUTE=======================
router.post('/login',async(req, res)=>{
    req.header('Content-Type', 'application/json');
    const{email, password} = req.body;
    if(!email || !password){
        return res.status(402).json({error:"Please Fill all credentials"});
    }
    try {
        const savedUser = await User.findOne({email:email});
        if(!savedUser){
            return res.status(404).json({error:"Invalid Username or password"});
        }
        const matchPassword = await bcrypt.compare(password, savedUser.password);
        if(!matchPassword){
            res.status(402).json({error:'Invalid passowrd or email address'});
        }else{
            //JSON -Token-
            const token =  JWT.sign({_id:savedUser._id},JWT_SECRET);
            const {_id, name, email}  = savedUser;
            res.status(200).json({token,user:{_id, name, email}});
        }
        
    } catch (error) {
        console.log(error);
    }

    

})



module.exports = router;