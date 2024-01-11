"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader === null || authHeader === undefined) {
        return res.status(401).json({ status: 401, message: "UnAuthorized" });
    }
    const token = authHeader.split(" ")[1];
    const verify = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err)
            return res.status(401).json({ status: 401, message: "UnAuthorized" });
        req.user = "aaa";
        next();
    });
};
// export default authmiddleware;
