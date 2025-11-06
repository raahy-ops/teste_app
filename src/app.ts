import express from "express";
import { Request, Response, NextFunction } from "express";
import router from "./routes/tarefaRouter";

const app = express();
app.use(express.json());
app.use("/tarefas", router)







// Rota Genérica, Vai pegar qualquer coisa que vir, irá processar o user

export default app;

// controller - valida e direciona para Models
// Model - representação dos objetos
// repositories - representação no fim de tudo da DAO
