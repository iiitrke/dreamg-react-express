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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
function get() {
    return __awaiter(this, void 0, void 0, function* () {
        return { name: "sanjay" };
    });
}
function create(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const salt = bcryptjs_1.default.genSaltSync(10);
            data.password = bcryptjs_1.default.hashSync(data.password, salt);
            const result = yield prismaClient.user.create({ data: data });
            return result;
        }
        catch (error) { }
    });
}
exports.default = { get, create };
