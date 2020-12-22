const express = require('express');
const JWT = require('jsonwebtoken');
const { findOne } = require('../models/user');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router()

// ==================LOGIN ROUTE=============
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



module.exports = router;