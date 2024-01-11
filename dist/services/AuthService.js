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
const dotenv_1 = __importDefault(require("dotenv"));
const db_config_1 = __importDefault(require("../configs/db/db.config"));
const UserNotFoundError_1 = require("../Exceptions/UserNotFoundError");
const bcryptUtil_1 = __importDefault(require("../utils/bcryptUtil"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid4_1 = __importDefault(require("uuid4"));
dotenv_1.default.config();
const getMultiple = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ status: "success" });
});
function login(loginData) {
    return __awaiter(this, void 0, void 0, function* () {
        ////  validate user input
        const fuser = yield db_config_1.default.user.findFirst({
            where: {
                email: loginData.email,
            },
            include: {
                roles: {
                    include: {
                        user: { select: { name: true, id: true } },
                        role: { select: { name: true, id: true } },
                    },
                },
                // password: true,
                // name: true,
                // id: true,
                // email: true,
            },
        });
        const isRefreshTokenAvailable = yield db_config_1.default.refreshToken.findFirst({
            where: { userId: { equals: fuser === null || fuser === void 0 ? void 0 : fuser.id } },
        });
        console.log("is refresh token available", isRefreshTokenAvailable);
        if (!fuser) {
            throw new UserNotFoundError_1.UserNotFoundError({
                name: "USER NOT FOUND ERROR",
                message: "User not found",
                cause: undefined,
            });
        }
        const isPasswordMatched = yield bcryptUtil_1.default.compare(loginData.password, fuser.password);
        console.log("Password matched");
        const payLoadData = { id: fuser.id, name: fuser.name };
        !isPasswordMatched ? ThrowUserNotFound() : null;
        // Issue Toke
        const token = jsonwebtoken_1.default.sign(payLoadData, process.env.JWT_SECRET, {
            expiresIn: "1M",
        });
        console.log("AccessToken generated ", token);
        // const refreshToken = await createRefreshToken(fuser);
        // .then((token) => {
        //   console.log(token);
        //   return token;
        // })
        // .catch((error) => console.log(error));
        // console.log("Refresh Token", refreshToken);
        let authorities = [];
        fuser.roles.map((role) => authorities.push(role.role.name));
        const tokenObj = {
            id: fuser.id,
            username: fuser.name,
            email: fuser.email,
            accesstoken: token,
            roles: authorities,
            // refreshToken: refreshToken?.token,
        };
        return tokenObj;
    });
}
const createRefreshToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    let expiredAt = new Date();
    expiredAt.setSeconds(expiredAt.getSeconds() + process.env.JWRREFRESHEXPIRATION);
    let _token = (0, uuid4_1.default)();
    console.log("Refresh Token UUID", _token);
    const refreshToken = db_config_1.default.refreshToken
        .create({
        data: {
            token: _token,
            expiryDate: new Date(expiredAt.getTime()),
            userId: user.id,
        },
    })
        .then((token) => {
        console.log(token);
        return token;
    })
        .catch((error) => console.log(error));
    return refreshToken;
});
exports.default = { login, getMultiple };
const ThrowUserNotFound = () => {
    throw new UserNotFoundError_1.UserNotFoundError({
        name: "USER NOT FOUND ERROR",
        message: "User not found",
        cause: undefined,
    });
};
