import { Router } from "express";
import ClienteController from "../controllers/ClienteController";
 
const rotaCliente = Router();
 
rotaCliente.post("/", ClienteController.CadastrarLogin);
 
 
export default rotaCliente;