import { RowDataPacket } from "mysql2";

export type Quartos = RowDataPacket &{
   
    id: number;
    nome:string;
    numero:string;
    qnt_cama_casal:number;
    qnt_cama_solteiro:number;
    preco:number;
    disponivel:boolean;
}

export type QuartoReserva = {
    inicio:string 
    fim:string
    quantidade: string
}




