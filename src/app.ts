import express from "express";
import { Request, Response, NextFunction } from "express"; // corpo da requisição
import rotaTarefa from "./routes/tarefaRouter"; //rota para chamar

const app = express(); // criando o app
app.use(express.json()); // permisão 
app.use("/tarefas", rotaTarefa) // cair nesta rota 







// Rota Genérica, Vai pegar qualquer coisa que vir, irá processar o user

export default app;

// controller - valida e direciona para Models
// Model - representação dos objetos
// repositories - representação no fim de tudo da DAO
