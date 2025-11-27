import { Router } from "express";
import tarefaController from "../controllers/tarefaController"; // indentifica a requisição, caminho da url

const rotaTarefa = Router(); // cuida da rota

// rotas para tarefas, metodo CRUD 

rotaTarefa.get("/", tarefaController.getTarefas)
rotaTarefa.get("/:id", tarefaController.getTarefa)
rotaTarefa.post("/", tarefaController.criarTarefa)
rotaTarefa.put("/:id", tarefaController.atualizarTarefa)
rotaTarefa.delete("/:id", tarefaController.deletarTarefa)


export default rotaTarefa;
