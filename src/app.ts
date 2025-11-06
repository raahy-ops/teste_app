import express from "express";
import { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json())

//rota quuery(Opcional): api/quartos/disponiveis ? inicio=2025

app.get("/parametro/:nome",  (req:Request, res:Response, next:NextFunction) => {
 const nome = req.params.nome;
 console.log("Rota de parametro - Cliente digitou: ", nome)
 res.send(`Cliente digitou o nome: ${nome}`)
})

app.get("/query",  (req:Request, res:Response, next:NextFunction) => {
 const nome = req.query.nome
 console.log("Cliente digitou: ", nome)
 res.send(`voce digitou o nome: ${nome}`)
})

app.get("/corpo",  (req:Request, res:Response, next:NextFunction) => {
 const nome = req.body.nome
 console.log("Variavel dentro do corpo - Cliente digitou: ", nome)
 res.send(`voce digitou o nome: ${nome}`)
})

app.get("/exemplo",  (req:Request, res:Response, next:NextFunction) => {
  console.log('aconteceu algo!!!')
  res.send("rodou tudo certo!!")
})

//mais relevante para menos relevante

// api/quartos/disponiveis
// api/quartos/1
// api/quartos/





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
