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
const registerValidation_1 = require("../validations/registerValidation");
const UserService_1 = __importDefault(require("../services/UserService"));
function get(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // res.json({ name: "abc" });
            res.json(yield UserService_1.default.get());
        }
        catch (error) {
            next(error);
        }
    });
}
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield req.body;
            const user = yield registerValidation_1.Validator.validate(data);
            const newuser = yield UserService_1.default.create(user);
            console.log(newuser);
            res.status(200).json(newuser);
        }
        catch (error) {
            if (error instanceof registerValidation_1.ValidationError) {
                console.log({ error });
                res.status(400).json({ status: 400, errors: error.errors });
            }
        }
    });
}
exports.default = { get, create };
