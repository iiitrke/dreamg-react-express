import { Request, Response } from "express";

class ProfilController {
  static async index(req: Request, res: Response) {
    const user = req.user;
    res.status(200).json({ status: 200, user });
  }
  static async store() {}
  static async show() {}
  static async update() {}
  static async destroy() {}
}

export default ProfilController;
