"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
// import service from "../services/TestService";
const route = express_1.default.Router();
// route.post("/", (req: Request, res: Response) => {
//   const data = req.body.json();
//   const result = service.create(data);
//   res.status(200).json(result);
//   //   res.send("Hello World From the Typescript Server!");
// });
route.get("/", userController_1.default.get);
route.post("/", userController_1.default.create);
exports.default = route;
