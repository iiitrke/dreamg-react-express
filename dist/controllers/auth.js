"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
class Auth {
    /**
     * name
     */
    register(req, res) {
        console.log("register called");
        res.send("Auth");
    }
}
exports.Auth = Auth;
