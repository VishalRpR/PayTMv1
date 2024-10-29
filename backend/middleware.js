const jwt = require("jsonwebtoken");
const { JWT_SECETE } = require("./config");

function authorize(req, res, next) {

   
        let token = req.headers.authorization;
        if (!token || !token.startsWith("Bearer ")) {
            return res
                .status(411)
                .json({
                    message: "authorization token missing"
                })
        }


        token = token.split(" ")[1];

        const user = jwt.verify(token, JWT_SECETE);

        if (user.userID) {
            req.userID = user.userID
            next();

        } else {
            return res.status(401).json({})
        }
       
    

}


module.exports = authorize;