import { NextFunction, Request, Response } from "express";

import { Validator, ValidationError } from "../validations/registerValidation";
import service from "../services/UserService";
import { PrismaClient } from "@prisma/client";

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    // res.json({ name: "abc" });
    res.json(await service.get());
  } catch (error) {
    next(error);
  }
}

async function create(req: Request, res: Response) {
  try {
    const data = await req.body;
    const user: IUser = await Validator.validate(data);
    const newuser = await service.create(user);

    console.log(newuser);

    res.status(200).json(newuser);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log({ error });
      res.status(400).json({ status: 400, errors: error.errors });
    }
  }
}

export default { get, create };
