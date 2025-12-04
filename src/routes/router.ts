import { Router } from "express";
import rotaTarefa from "./tarefaRouter";
import { createJWT } from "../utils/jwt";


const handlerRouter = Router();

// rotas publicas
handlerRouter.use("/tarefas", rotaTarefa); // criar tudo denro do router 

handlerRouter.use("/jwt", (req, res)=>{
  res.json(createJWT())
})

// rotas privadas
export default handlerRouter
