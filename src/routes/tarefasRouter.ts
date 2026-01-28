import { Router } from "express";
import tarefasController from "../controllers/tarefasController";

const rotaTarefa = Router();

rotaTarefa.get("/", tarefasController.getTarefas)
rotaTarefa.get("/:id", tarefasController.getTarefa)
rotaTarefa.post("/", tarefasController.criarTarefa)
rotaTarefa.put("/:id", tarefasController.atualizarTarefa)
rotaTarefa.delete("/:id", tarefasController.deletarTarefa)

export default rotaTarefa;
