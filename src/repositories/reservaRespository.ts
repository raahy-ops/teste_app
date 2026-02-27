import {pool} from "../database/database";
import { ResultSetHeader, RowDataPacket } from "mysql2";


async function fazerPedido(data:any){
    const sql = `INSERT INTO pedidos (usuario_id, cliente_id, pagamento)
        VALUES (?, ?, ?)`;
 
    try {
        const [result] = await pool.query<ResultSetHeader>(sql, [
            5,
            data.cliente_id,
            data.pagamento
        ]);
        // apenas retorna o ID do novo pedido
        return result.insertId;
    } catch (err) {
        console.error('Erro ao criar pedido:', err);
        return null;
    }
}
 
async function fazerReserva(idPedido:number, quarto:any) {
    const sql = `INSERT INTO reservas (pedido_id, quarto_id, inicio, fim)
    VALUES (?, ?, ?, ?)`
 
    try {
        const [result] = await pool.query<ResultSetHeader>(sql, [
            idPedido,
            quarto.id,
            quarto.inicio,
            quarto.fim,
        ]);
        // apenas retorna o ID do novo pedido
        return result.insertId;
    } catch (err) {
        console.error('Erro ao reservar o quarto:', err);
        return null;
    }
   
}
 
export default{
    fazerPedido, fazerReserva
}