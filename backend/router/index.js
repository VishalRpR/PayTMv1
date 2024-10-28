const express=require("express");
const routerv1 = require("./v1");

const app=express();
const apirouter=express.Router();

apirouter.use('/api/v1',routerv1)

// apirouter.user('/api/v2',routerv2)


module.exports = apirouter;