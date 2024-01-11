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
const TestService_1 = __importDefault(require("../services/TestService"));
function get(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res.json(yield TestService_1.default.getMultiple(req, res));
        }
        catch (err) {
            console.error(`Error while getting programming languages`, err.message);
            next(err);
        }
    });
}
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield req.body;
            console.log(data);
            res.json(yield TestService_1.default.create(data));
        }
        catch (err) {
            console.error(`Error while creating programming language`, err.message);
            next(err);
        }
    });
}
//   async function update(req: Request, res: Response, next: any) {
//     try {
//       res.json(await service.update(req.params.id, req.body));
//     } catch (err) {
//       console.error(`Error while updating programming language`, err.message);
//       next(err);
//     }
//   }
//   async function remove(req: Request, res: Response, next: any) {
//     try {
//       res.json(await service.remove(req.params.id));
//     } catch (err) {
//       console.error(`Error while deleting programming language`, err.message);
//       next(err);
//     }
//   }
exports.default = {
    get,
    create,
    // update,
    // remove
};
