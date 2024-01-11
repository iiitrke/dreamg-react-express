import Express, { Router, Request, Response } from "express";
import testController from "../controllers/testController";
// import service from "../services/TestService";

const route = Express.Router();

// route.post("/", (req: Request, res: Response) => {
//   const data = req.body.json();
//   const result = service.create(data);
//   res.status(200).json(result);
//   //   res.send("Hello World From the Typescript Server!");
// });

route.post("/", testController.create);

route.get("/", testController.get);

export default route;
