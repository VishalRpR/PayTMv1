const {default: mongoose } = require("mongoose");
const { MONGOOSE_URI } = require("./config");



async function dbconnect (){
    await mongoose.connect(MONGOOSE_URI);
    console.log("DB connected")
}

const userSchema = mongoose.Schema({
    name: {
        type: String
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

const User = mongoose.model("User", userSchema)

module.exports={
    dbconnect,
    User
}