import { Request } from "express";
import bcryptjs from "bcryptjs";
// import prisma from "../configs/db/db.config";
import { error } from "console";
import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();
async function get() {
  return { name: "sanjay" };
}
async function create(data: IUser) {
  try {
    const salt = bcryptjs.genSaltSync(10);
    data.password = bcryptjs.hashSync(data.password, salt);

    const result = await prismaClient.user.create({ data: data });

    return result;
  } catch (error) {}
}

export default { get, create };
