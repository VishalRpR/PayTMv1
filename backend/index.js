const express=require("express");
const {PORT}=require("./config");
const { dbconnect } = require("./db");
const apirouter = require("./router");
const cors=require("cors");


const app=express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', apirouter)

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
    dbconnect();
})