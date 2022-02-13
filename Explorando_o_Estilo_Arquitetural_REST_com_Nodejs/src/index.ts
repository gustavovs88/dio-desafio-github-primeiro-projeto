import express, { Request, Response, NextFunction, Router } from "express";
import jwtAuthenticationMiddleware from "./middlewares/jwt.authentication.middleware";
import errorHandler from "./middlewares/error.handler.middleware";
import authorizationRoute from "./routes/authorization.route";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

// Configuração da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração das Rotas
app.use(statusRoute);
app.use(authorizationRoute);
app.use(jwtAuthenticationMiddleware);
app.use(usersRoute);
// Configuração dos error handlers
app.use(errorHandler);

// Iniciando a Aplicação
app.listen(3050, () => {
  console.log("Aplicação escutando a porta 3050");
});
