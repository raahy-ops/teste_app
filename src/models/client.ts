import { RowDataPacket } from "mysql2";


export type Cliente = RowDataPacket &{
   
    id: number;
    nome:string;
    email:string;
    senha:string;
    cargo:string;
}