
const express = require('express');
const apirouter = require('../index.js');
const userrouter = require('./user.js');


const router=express.Router();

router.use("/user",userrouter)


module.exports=router;