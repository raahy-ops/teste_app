import { Router } from "express";
import rotaTarefa from "./tarefasRouter";
import { createJWT } from "../utils/jwt";
import { middleware } from "./jwtMiddleware";
import rotaLogin from "./loginRouter";
import rotaQuartos from "./quartosRouter";

const handlerRouter = Router();

// rotas publicas
handlerRouter.use("/tarefas", rotaTarefa);
handlerRouter.use("/api/login",rotaLogin);
handlerRouter.use("/api/quartosDisponiveis", rotaQuartos);

handlerRouter.use("/jwt", (req, res)=>{
    const payload = {
        id: 123,
        nome: "Senhor_fulano",
        cargo: "cliente"
    }
    res.json(createJWT(payload))
})

// rotas privadas
handlerRouter.get("/testeJWT", middleware, (req, res)=>{
    res.json("passou pelo JWT middleware")
})

export default handlerRouter