"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {login, getMultiple} from "../services/AuthService";
const AuthService_1 = __importDefault(require("../services/AuthService"));
const loginDataValidation_1 = require("../validations/loginDataValidation");
const UserExistExceptionError_1 = require("../Exceptions/UserExistExceptionError");
const UserNotFoundError_1 = require("../Exceptions/UserNotFoundError");
function get(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res.json(yield AuthService_1.default.getMultiple(req, res));
        }
        catch (err) {
            console.error(`Error while getting programming languages`, err.message);
            next(err);
        }
    });
}
function signIn(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const body = req.body;
            const loginData = yield loginDataValidation_1.validator.validate(body);
            const result = yield AuthService_1.default.login(loginData);
            console.log(result);
            res.status(200).json({
                message: "Logged In",
                bearerToken: `Bearer ${result.accesstoken}`,
                data: result,
            });
        }
        catch (error) {
            if (error instanceof UserExistExceptionError_1.UserExistExceptionError) {
                res.status(402).json({ result: "error" });
            }
            else if (error instanceof loginDataValidation_1.ValidationError) {
                res.status(405).json({ result: "error", error: error });
            }
            else if (error instanceof UserNotFoundError_1.UserNotFoundError) {
                res.status(410).json({ result: "error", error });
            }
            else {
                res.status(408).json({ result: "error" });
            }
        }
    });
}
exports.default = { get, signIn };
