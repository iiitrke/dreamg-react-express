import { Request, Response } from "express";
import service from "../services/TestService";

async function get(req: Request, res: Response, next: any) {
  try {
    res.json(await service.getMultiple(req, res));
  } catch (err: any) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}

async function create(req: Request, res: Response, next: any) {
  try {
    const data = await req.body;
    console.log(data);
    res.json(await service.create(data));
  } catch (err: any) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}

//   async function update(req: Request, res: Response, next: any) {
//     try {
//       res.json(await service.update(req.params.id, req.body));
//     } catch (err) {
//       console.error(`Error while updating programming language`, err.message);
//       next(err);
//     }
//   }

//   async function remove(req: Request, res: Response, next: any) {
//     try {
//       res.json(await service.remove(req.params.id));
//     } catch (err) {
//       console.error(`Error while deleting programming language`, err.message);
//       next(err);
//     }
//   }

export default {
  get,
  create,
  // update,
  // remove
};
