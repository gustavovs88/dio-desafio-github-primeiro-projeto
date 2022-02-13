import { Router, Request, Response, NextFunction } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";
import JWT, { SignOptions } from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic.authentication.middleware";

const authorizationRoute = Router();

authorizationRoute.post(
  "/token",
  basicAuthenticationMiddleware,
  async (req, res, next) => {
    try {
      const user = req.user;

      if (!user) {
        throw new ForbiddenError("Credenciais não informadas.");
      }
      const jwtPayload = { username: user.username };
      const jwtOptions: SignOptions = { subject: user?.uuid };
      const secretKey = "my_secret_key";

      const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);
      res.status(StatusCodes.OK).send({ token: jwt });
    } catch (error) {
      next(error);
    }
  }
);

export default authorizationRoute;
