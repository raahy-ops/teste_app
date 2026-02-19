import { QuartoReserva } from "../models/quarto";


async function disponiveis(pedido:QuartoReserva):Promise<Quartos|null>{
    const sql = `SELECT *
    FROM quartos q
    WHERE q.disponivel - 1 
    AND (q.qtd_cama_casal * 2 + q qtd_cama_solteiro) >= ? 
    AND q.id NOT IN (
    SELECT r.quarto_id
    FROM reservas r
    WHERE(r.data_fim >= ? AND r.data_inicio <= ? ))
    `;
    const [quartos] = await pool.query<Quartos[]>(sql, [
        pedido.quantidade,
        pedido.inicio,
        pedido.fim,
    ])
    return quartos.lenght
}