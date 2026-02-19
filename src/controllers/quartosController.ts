import { Request, Response, NextFunction } from "express";
import quartosRepository from "../repositories/quartosRepository";



async function disponiveis(req:Request, res:Response, next:NextFunction){
 
  const{inicio, fim, quantidade } = req.body;

  if(!inicio || !fim || !quantidade){
    return res.status(400).json({erro:"Preencha os campos para consulta"})
  }

  const dados = {inicio, fim, quantidade}

try{
    let quartos = await quartosRepository.disponiveis(dados);
    
    if(!quartos){throw new Error("Erro ao buscar quartos")}

    for(let q of quartos){
        const fotos = await quartosRepository.buscarFotoPorQuartoId(quantidade.id)
        quantidade.fotos = fotos
    }
    res.status(200).json(quartos);
  

  } catch (error) {
    console.log(error)
    return res.status(201).json({erro: "Erro ao buscar quartos!"})
  }
}


export default {
disponiveis
};