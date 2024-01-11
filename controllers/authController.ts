import { Request, Response } from "express";
// import {login, getMultiple} from "../services/AuthService";
import authService from "../services/AuthService";
import { validator, ValidationError } from "../validations/loginDataValidation";

import { UserExistExceptionError } from "../Exceptions/UserExistExceptionError";
import { UserNotFoundError } from "../Exceptions/UserNotFoundError";

async function get(req: Request, res: Response, next: any) {
  try {
    res.json(await authService.getMultiple(req, res));
  } catch (err: any) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}

async function signIn(req: Request, res: Response, next: any) {
  try {
    const body = req.body;
    const loginData = await validator.validate(body);

    const result = await authService.login(loginData);
    console.log(result);

    res.status(200).json({
      message: "Logged In",
      bearerToken: `Bearer ${result.accesstoken}`,
      data: result,
    });
  } catch (error) {
    if (error instanceof UserExistExceptionError) {
      res.status(402).json({ result: "error" });
    } else if (error instanceof ValidationError) {
      res.status(405).json({ result: "error", error: error });
    } else if (error instanceof UserNotFoundError) {
      res.status(410).json({ result: "error", error });
    } else {
      res.status(408).json({ result: "error" });
    }
  }
}

export default { get, signIn };
