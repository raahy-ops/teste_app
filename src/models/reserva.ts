import { RowDataPacket } from "mysql2";
 
export type Reserva =RowDataPacket &{
    id: number;
    pedido_id: number;
    quarto_id: number;
    adicional_id: number;
    inicio: Date;
    fim: Date;
}