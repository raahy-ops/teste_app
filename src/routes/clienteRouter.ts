import { Router } from "express";
import clienteController from "../controllers/ClienteController";
 
const rotaClient = Router();
 
rotaClient.post("/", clienteController.Criarcliente);
 
 
export default rotaLogin;