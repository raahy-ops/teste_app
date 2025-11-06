import express from "express";
import { Request, Response, NextFunction } from "express";

const app = express();

//mais relevante para menos relevante

// api/quartos/disponiveis
// api/quartos/1
// api/quartos  


// Aqui terá todas as conexões




//rota de erro
app.use((req: Request, res: Response, next: NextFunction) => {
  // rendler, quem está segurando as coisas

  res.send("Hello Wold!!");
});
//rota generica

app.use((err: Error, req: Request, res:Response, next: NextFunction) => {
  // rendler, quem está segurando as coisas
  console.log(err);
  res.status(500).send("Erro na requisição")
});


// Rota Genérica, Vai pegar qualquer coisa que vir, irá processar o user

export default app;

// controller - valida e direciona para Models
// Model - representação dos objetos
// repositories - representação no fim de tudo da DAO
