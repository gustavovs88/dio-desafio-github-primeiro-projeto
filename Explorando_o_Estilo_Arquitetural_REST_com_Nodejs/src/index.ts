import express, { Request, Response, NextFunction, Router } from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

// Configuração da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração das Rotas
app.use(usersRoute);
app.use(statusRoute);

// Iniciando a Aplicação
app.listen(3050, () => {
  console.log("Aplicação escutando a porta 3050");
});
