
const express = require('express');
const apirouter = require('../index.js');
const userrouter = require('./user.js');
const accountrouter = require('./account.js');


const router=express.Router();

router.use("/user", userrouter); 
router.use("/account", accountrouter)


module.exports=router;