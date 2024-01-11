import { Request, Response } from "express";
import Jwt from "jsonwebtoken";

// const authmiddleware
export = (req: Request, res: Response, next: any) => {
  const authHeader = req.headers.authorization;
  if (authHeader === null || authHeader === undefined) {
    return res.status(401).json({ status: 401, message: "UnAuthorized" });
  }

  const token = authHeader.split(" ")[1];
  const verify = Jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err)
      return res.status(401).json({ status: 401, message: "UnAuthorized" });
    req.user = "aaa";
    next();
  });
};

// export default authmiddleware;
