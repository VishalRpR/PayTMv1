const { default: mongoose } = require("mongoose");
const { MONGOOSE_URI } = require("./config");



async function dbconnect() {
    await mongoose.connect(MONGOOSE_URI);
    console.log("DB connected")
}

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})




const accountSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    balance: {
        type: Number,
        require: true
    }
})

const Account = mongoose.model("Account", accountSchema)

const User = mongoose.model("User", userSchema)

module.exports = {
    dbconnect,
    User,
    Account
}