"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const compare = (inputPassowrd, bcryptedPassword) => {
    return bcryptjs_1.default.compare(inputPassowrd, bcryptedPassword);
};
exports.default = { compare };
