const jwt = require("jsonwebtoken")

const CreateToken =(userID)=>{
    var token = jwt.sign({userid: userID}, process.env.SECRET_KEY, {expiresIn: "10y"})
    return token
}

module.exports = {CreateToken}