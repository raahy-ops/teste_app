import { Request, Response, NextFunction } from "express";
import quartosRepository from "../repositories/quartosRepository";
import { corrigirDataHora } from "../utils/datahora";



async function disponiveis(req:Request, res:Response, next:NextFunction) {
    let {inicio, fim, quantidade} = req.body;
 
    if (!inicio || !fim || !quantidade){
        return res.status(400).json({erro:"Preencha os campos para consulta"})
    }
 
    inicio = await corrigirDataHora(inicio, 14)
    fim = await corrigirDataHora(fim, 12)
    const dados = {inicio, fim, quantidade}
    try {
        // buscar quartos diponiveis na data
        let quartos = await quartosRepository.disponiveis(dados)
        if (!quartos){ throw new Error("Erro ao buscar os quartos")}
 
        // Buscar as fotos para cada quarto retornado
        for (let q of quartos){
            const fotos = await quartosRepository.buscarFotoPorQuartoId(q.id);
            q.fotos = fotos
        }
        res.status(200).json(quartos);
 
    } catch (error) {
        console.error(error)
        return res.status(400).json({erro:"Erro ao buscar os quartos"})
    }
   
}
 
 
export default{
    disponiveis
}