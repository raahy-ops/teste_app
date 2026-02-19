import { Request, Response, NextFunction } from "express";
import reservaRespository from "../repositories/reservaRespository";
import { Reservas } from "../models/reserva";

async function corrigirDataHora(data:string, hora: number) {
  console.log(data)
  let novaData = Date(data)
  return novaData
}

async function criarPedido(req:Request, res:Response, next:NextFunction){
    const token = req.payload;
    const {pagamento, quartos} = req.body;



    if(!token.id || !pagamento || !quartos){
      return res.status(400).json({erro: "Dados incompletos"})
    }

    try{
      const dadosPedido = {
        cliente_id : token.id,
        pagamento : pagamento
      }

      const pedidoID = await reservaRespository.fazerPedido(dadosPedido);
      if(!pedidoID){throw new Error ("Erro ao criar o Pedido")}
      
      let result = []
      for (let q of quartos){
         q.inicio =
         q.fim = 

        let data = new Date(q.inicio)
        datasetHours(14,0,0)
        
        
        const reservaID = await reservaRespository.fazerReserva(pedidoID, q)
        
        if(!reservaID){continue}
        result.push({
          ...q,
          reservaID: reservaID,
        })

      }
         console.log(result)

      res.status(200).json({
        message: "Reserva feita com sucesso",
        pedidoID: pedidoID,
        reservas: result
      })


    } catch(error){
      console.log(error)
      return res.status(400). json ({erro: "Reserva não efetuada!"})
    }


  }


export default {
  criarPedido 
};
