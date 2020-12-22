const express = require('express');
const mongoose = require('mongoose')
const _HOSTNAME = 'localhost';
const {MONGOURI} = require('./config/dev');
const _PORT = '4000';
const authentication = require('./routes/authentication');
const app = express()

app.use(express.json());
mongoose.Promise = global.Promise;
mongoose.connect(MONGOURI,({useNewUrlParser:true, useUnifiedTopology:true}), ()=>{
    console.log('Connect to mongodb');
});

app.use(authentication);






// ===============LISTENING APP=======================
app.listen(_PORT , ()=>{
    console.log(`The app is running at http://${_HOSTNAME}:${_PORT}`);
})