
const express = require("express");
const { default: mongoose } = require("mongoose");
const { Account } = require("../../db");
const authorize = require("../../middleware");
const accountrouter = express.Router();



// accountrouter.get("/", getdetails);
accountrouter.post("/transaction", authorize, sendmoney);
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