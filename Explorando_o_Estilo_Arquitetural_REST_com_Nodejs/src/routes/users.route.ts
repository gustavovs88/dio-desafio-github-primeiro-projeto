import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import jwtAuthenticationMiddleware from "../middlewares/jwt.authentication.middleware";
import UserRepository from "../repositories/user.repository";
import authorizationRoute from "./authorization.route";
// get /users
// get /users/:uuid
// post /users
// put /users/:uuid
// delete /users/:uuid

const usersRoute = Router();

usersRoute.get(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await UserRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
  }
);

usersRoute.get(
  "/users/:uuid",
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    try {
      const uuid = req.params.uuid;
      const user = await UserRepository.findById(uuid);
      res.status(StatusCodes.OK).send({ user });
    } catch (error) {
      next(error);
    }
  }
);

usersRoute.post(
  "/users",
  async (req: Request<{ user: JSON }>, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await UserRepository.createUser(newUser);
    res.status(StatusCodes.CREATED).send(newUser);
  }
);

usersRoute.put(
  "/users/:uuid",
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;
    await UserRepository.updateUser(modifiedUser);
    res.status(StatusCodes.OK).send();
  }
);

usersRoute.delete(
  "/users/:uuid",
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    await UserRepository.remove(uuid);
    res.status(StatusCodes.OK).send();
  }
);

authorizationRoute.post(
  "/token/validate",
  jwtAuthenticationMiddleware,
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
  }
);

export default usersRoute;
