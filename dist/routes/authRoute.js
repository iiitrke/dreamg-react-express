"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("../controllers/authController"));
const router = express_1.default.Router();
exports.AuthRouter = router;
// const programmingLanguagesController = require("../controllers/programmingLanguages.controller");
// /* GET programming languages. */
router.get("/", authController_1.default.get);
router.post("/login", authController_1.default.signIn);
