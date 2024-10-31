
const express = require("express");
const { default: mongoose } = require("mongoose");
const { Account } = require("../../db");
const authorize = require("../../middleware");
const { number } = require("zod");
const accountrouter = express.Router();



accountrouter.get("/balance",authorize, getdetails);
accountrouter.post("/transaction", authorize, sendmoney);


async function getdetails(req,res){

    try {

        const details=await Account.findOne({user:req.userID});
       
        
        const money = (details.balance / 100).toFixed(2);
        return res.json({
            message:`your account balance is ${money}`
        })
        
    } catch (error) {
        console.log(error);
        return res.status(411).json({})
    }

}
async function sendmoney(req, res) {
    const amount = req.body.amount;
    const from = req.userID;
    const to = req.body.to;

    try {
        // Find the sender's account
        const userFrom = await Account.findOne({ user: from });
        if (!userFrom || amount > userFrom.balance) {
            return res.status(411).json({
                message: "Insufficient balance",
            });
        }

        // Find the recipient's account
        const toAccount = await Account.findOne({ user: to });
        if (!toAccount) {
            return res.status(411).json({
                message: "Invalid Account",
            });
        }

        // Perform the updates
        await Account.updateOne({ user: from }, { $inc: { balance: -amount } });
        await Account.updateOne({ user: to }, { $inc: { balance: amount } });

        res.json({
            message: "Transaction done successfully",
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    }
}



module.exports = accountrouter;