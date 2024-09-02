// const jwt = require("jsonwebtoken")
// const UserSchema = require("../Model/User.schema")

// const isLoggedIn = async(req, res, next) => {

//     var token = req.headers.authorization.split(' ')[1];

//     if (!token) {
//         return next(new Error('Missing token')); // Pass error to centralized handler
//     }

//     jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//         if (err) {
//             let errorStatus = 401;
//             let errorMessage;
//             switch (err.name) {
//                 case 'TokenExpiredError':
//                     errorMessage = 'Token expired, please login again.';
//                     break;
//                 default:
//                     errorMessage = 'Invalid token.';
//             }
//             return next(new Error(errorMessage, errorStatus)); // Pass error with status code
//         }

//         const user = await UserSchema.findOne({ _id: decoded.userid });

//         if (!user) {
//             return next(new Error('User not found')); // Pass error to centralized handler
//         }

//         req.user = user;
//         next(); // Proceed with the request handler

//     })
// }
// var token = req.headers.authorization.split(' ')[1]
// if (!token) {
//     return res.send({ message: "Please first login!", success: false })
// }

// var userData = jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
//     if (err) {
//         if (err.name === "TokenExpiredError") {
//             return res.status(401).send({ error: "Token expired, please login again." });
//         } else {
//             return res.status(401).send({ error: "Invalid token." });
//         }
//     }
// })

// var user = await UserSchema.findOne({ _id: userData.userid })

// if (!user) {
//     return res.send({ message: "Please first login!" })
// }

// req.user = user
// next()

const jwt = require("jsonwebtoken");
const UserSchema = require("../Model/User.schema");

async function isLoggedIn(req, res, next) {
    try {
        // ... rest of your code ...

        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired, please log in again.' });
        }

        // ... rest of your code ...
    } catch (err) {
        // ... rest of your code ...
    }
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            throw new Error('Missing token');
        }

        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        const user = await UserSchema.findOne({ _id: decoded.userid });

        if (!user) {
            throw new Error('User not found');
        }

        req.user = user;
        next();
    } catch (err) {
        // Centralized error handling can access the error message and status code here
        return next(err);
    }
}

// module.exports = isLoggedIn;
module.exports = { isLoggedIn }