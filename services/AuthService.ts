import dotenv from "dotenv";
import { Request, Response } from "express";
import { UserExistExceptionError } from "../Exceptions/UserExistExceptionError";
import prisma from "../configs/db/db.config";
import { equal } from "assert";
import { UserNotFoundError } from "../Exceptions/UserNotFoundError";
import bcryptUtil from "../utils/bcryptUtil";
import jwt from "jsonwebtoken";
import uuid4 from "uuid4";
import { User } from "@prisma/client";
import { error, log } from "console";
dotenv.config();

const getMultiple = async (req: Request, res: Response) => {
  res.status(200).json({ status: "success" });
};

async function login(loginData: ILogin) {
  ////  validate user input

  const fuser = await prisma.user.findFirst({
    where: {
      email: loginData.email,
    },
    include: {
      roles: {
        include: {
          user: { select: { name: true, id: true } },
          role: { select: { name: true, id: true } },
        },
      },

      // password: true,
      // name: true,
      // id: true,
      // email: true,
    },
  });

  const isRefreshTokenAvailable = await prisma.refreshToken.findFirst({
    where: { userId: { equals: fuser?.id } },
  });

  console.log("is refresh token available", isRefreshTokenAvailable);
  if (!fuser) {
    throw new UserNotFoundError({
      name: "USER NOT FOUND ERROR",
      message: "User not found",
      cause: undefined,
    });
  }

  const isPasswordMatched = await bcryptUtil.compare(
    loginData.password,
    fuser.password
  );

  console.log("Password matched");

  const payLoadData = { id: fuser.id, name: fuser.name };
  !isPasswordMatched ? ThrowUserNotFound() : null;
  // Issue Toke

  const token = jwt.sign(payLoadData, process.env.JWT_SECRET, {
    expiresIn: "1M",
  });
  console.log("AccessToken generated ", token);

  // const refreshToken = await createRefreshToken(fuser);
  // .then((token) => {
  //   console.log(token);
  //   return token;
  // })
  // .catch((error) => console.log(error));
  // console.log("Refresh Token", refreshToken);

  let authorities: any = [];
  fuser.roles.map((role) => authorities.push(role.role.name));

  const tokenObj = {
    id: fuser.id,
    username: fuser.name,
    email: fuser.email,
    accesstoken: token,
    roles: authorities,
    // refreshToken: refreshToken?.token,
  };

  return tokenObj;
}

const createRefreshToken = async (user: User) => {
  let expiredAt = new Date();

  expiredAt.setSeconds(
    expiredAt.getSeconds() + process.env.JWRREFRESHEXPIRATION
  );

  let _token = uuid4();
  console.log("Refresh Token UUID", _token);

  const refreshToken = prisma.refreshToken
    .create({
      data: {
        token: _token,
        expiryDate: new Date(expiredAt.getTime()),
        userId: user.id,
      },
    })
    .then((token) => {
      console.log(token);
      return token;
    })
    .catch((error) => console.log(error));

  return refreshToken;
};

export default { login, getMultiple };

const ThrowUserNotFound = () => {
  throw new UserNotFoundError({
    name: "USER NOT FOUND ERROR",
    message: "User not found",
    cause: undefined,
  });
};
