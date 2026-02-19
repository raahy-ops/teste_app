import { pool } from "../database/database";
import { Reservas } from "../models/reserva"
import { ResultSetHeader, RowDataPacket } from "mysql2";


async function fazerPedido(data:any){
    const sql = `INSERT INTO pedidos (cliente_id, pagamento)
    VALUES(?, ?)`;
    
    try{
        const [result] = await pool.query<ResultSetHeader>(sql, [
            data.cliente_id,
            data.pagamento
        ]);
            return result.insertId;
    }catch (err) {
        console.error('Erro ao criar pedido:', err);
        return null;
    }
   
}

async function fazerReserva(idPedido:number, quartos:object){
    
}


export default{
    fazerReserva, fazerPedido
}