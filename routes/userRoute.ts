import Express, { Router, Request, Response } from "express";
import usercontroller from "../controllers/userController";
// import service from "../services/TestService";

const route = Express.Router();

// route.post("/", (req: Request, res: Response) => {
//   const data = req.body.json();
//   const result = service.create(data);
//   res.status(200).json(result);
//   //   res.send("Hello World From the Typescript Server!");
// });

route.get("/", usercontroller.get);
route.post("/", usercontroller.create);

export default route;
