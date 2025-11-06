import { Request, Response, NextFunction } from "express";


function getTarefas(req:Request, res: Response, next:NextFunction){
  res.send("Listar todas as tarefas")
}

function getTarefa(req:Request, res: Response, next:NextFunction){
  res.send("Listar uma tarefa")
}

function criarTarefa(req:Request, res: Response, next:NextFunction){
  res.send("criar tarefas")
}

function atualizarTarefa(req:Request, res: Response, next:NextFunction){
  res.send("atualizar uma tarefa")
}

function deletarTarefa(req:Request, res: Response, next:NextFunction){
  res.send("deletar uma tarefa")
}


export default{
  getTarefas,getTarefa, criarTarefa, 
  atualizarTarefa, deletarTarefa};

