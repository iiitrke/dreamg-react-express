import express, { Express, Request, Response, Router } from "express";
import authController from "../controllers/authController";
const router = express.Router();
// const programmingLanguagesController = require("../controllers/programmingLanguages.controller");

// /* GET programming languages. */
router.get("/", authController.get);

router.post("/login", authController.signIn);
// /* POST programming language */
// router.post("/", programmingLanguagesController.create);

// /* PUT programming language */
// router.put("/:id", programmingLanguagesController.update);
//
// /* DELETE programming language */
// router.delete("/:id", programmingLanguagesController.remove);

// module.exports = router;
export { router as AuthRouter };
