import Express, { Router, Request, Response } from "express";
// import { calcRoute } from './calcRoute';
import { defaultRoute } from "./defaultRoute";
import { AuthRouter } from "./authRoute";
import testRoute from "./testRoute";
import userRoute from "./userRoute";
import profileRoute from "./profileRoute";
import authmiddleware from "../middlewares/AuthenticateMiddleware";

export const routes = Express.Router();

routes.use(defaultRoute);
routes.use("/auth", AuthRouter);
routes.use("/test", testRoute);
routes.use("/user", userRoute);
routes.use("/profile", authmiddleware, profileRoute);
// routes.use(calcRoute);
