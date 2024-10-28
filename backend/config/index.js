const dotenv = require("dotenv");

dotenv.config();

module.exports={
    JWT_SECETE:process.env.JWT_SECETE,
    PORT:process.env.PORT,
    MONGOOSE_URI:process.env.MONGOOSE_URI
};