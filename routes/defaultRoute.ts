import Express, { Router, Request, Response } from "express";

export const defaultRoute = Express.Router();

defaultRoute.get("/", (req: Request, res: Response) => {
  res.send("Hello World From the Typescript Server!");
});
