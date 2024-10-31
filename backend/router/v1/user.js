const express = require("express");
const { User, Account } = require("../../db");
const { z } = require("zod");
const jwt = require('jsonwebtoken');
const { JWT_SECETE } = require("../../config");
const authorize = require("../../middleware")


const userrouter = express.Router()

userrouter.post("/signup", signup);
userrouter.post("/signin", signin);
userrouter.get("/bulk", authorize, bulkget);
userrouter.put('/', authorize, updateuser);
userrouter.get('/', authorize, getuser);

async function getuser(req,res){
try {
    const response=await User.findOne({
        _id:req.userID
    })

    return res.json({

        message:"user",
        data:response})
} catch (error) {
    
}
}


async function signin(req, res) {
    try {
        
        const response = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        console.log(response)
      
        if(response){
            const ID = response._id;
            console.log(ID)
            const token = jwt.sign({ userID: ID }, JWT_SECETE);
            return res.json({
                message: "signin Successful",
                data: token
            })
        }else{
            console.log("calling")
            return res.status(411).json({
                message:"invalid email/password"
            })
        }
       


       


    } catch (error) {

        console.log(error);
        throw error;
    }
}


async function updateuser(req, res) {

    const uduser = z.object({
        name: z.string(),
        lastname: z.string(),
        password: z.string()
    });
    try {


        const udparseduser = uduser.safeParse({
            name: req.body.name,
            lastname: req.body.lastname,
            password: req.body.password
        })

        if (!udparseduser.success) {
            return res.status(411).json({
                message: "incorrect arrguments || Not present"
            })
        }


        const udupdate = await User.updateOne(udparseduser.data);

        return res.status(200).json({
            message: "Updated the user successfully",
            data: udupdate
        })

    } catch (error) {

        console.log(error);
        throw error;

    }
}

async function bulkget(req, res) {
    const filter = req.query.filter || "";

    try {


        const users = await User.find({
            $or: [
                {
                    name: {
                        "$regex": filter
                    }
                },
                {
                    lastname: {
                        "$regex": filter
                    }


                }
            ]
        })




        return res
            .status(200)
            .json({
                user: users.map((user) => ({
                    name: user.name,
                    lastname: user.lastname,
                    email: user.email,
                    _id: user._id
                }))
            })


    } catch (error) {


        console.log(error);
        throw error;

    }
}

const Userzod = z.object({
    name: z.string(),
    lastname: z.string(),
    email: z.string(),
    password: z.string()
});



async function signup(req, res) {

    try {


        const parsed = Userzod.safeParse({
            name: req.body.name,
            lastname: req.body.lastname,
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

        const existinguser = await User.findOne({ email: req.body.email })

        if (existinguser) {
            return res.status(411).json({
                message: "user already exist"
            })
        }


        const user = await User.create(parsed.data);
        const balance=await Account.create({
               user:user._id,
               balance:10000
        })

        console.log(balance)
        const ID = user._id

        const token = jwt.sign({ userID: ID }, JWT_SECETE)

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