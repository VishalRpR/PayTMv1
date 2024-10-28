const express = require("express");
const { User } = require("../../db");
const { z } = require("zod");
const jwt=require('jsonwebtoken');
const { JWT_SECETE } = require("../../config");


const userrouter = express.Router()

userrouter.post("/signup", signup);
userrouter.get("/bulk", bulkget)

async function bulkget(req,res){
           try {
           
           } catch (error) {
            
           }
}

const Userzod = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string()
});



async function signup(req, res) {

    try {
         
        const parsed= Userzod.safeParse({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        if (!parsed.success) {
            return res
                .status(411)
                .json({
                    message: "Bad request, email or password invalid"
                })
        }

            const existinguser=await User.findOne({email:req.body.email})

        if (existinguser){
            return res.status(411).json({
                message:"user already exist"
            })
        }
        const user = await User.create(parsed.data);

        const userID=user._id

        const token = jwt.sign({ userID }, JWT_SECETE)

        res.status(200).json({
            data: token,
            message: "signup completed"
        })
    } catch (error) {


        console.log(error);
        throw error;

    }

}


module.exports = userrouter