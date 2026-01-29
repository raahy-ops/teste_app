import { Request, Response, NextFunction } from "express";

async function criarLogin(req:Request, res:Response, next:NextFunction){
  try{
    const result = await tarefasRepository.criarTarefa()
    return res.status(201).json(result)
  }catch(error){
    console.log("Erro ao criar login", error)
    return res.status(400).json({erro:"dados incompletos"})
  }
}

export default {
  criarLogin
};