import { Router } from "express";
import reservaController from "../controllers/reservaController";
 
const rotaLogin = Router();
 
rotaLogin.post("/", reservaController.criarPedido);
 
 
export default rotaLogin;