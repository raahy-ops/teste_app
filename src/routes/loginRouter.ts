import { Router } from "express";
import loginController from "../controllers/loginController";

const rotaLogin = Router();


rotaLogin.post("/", () => {

    console.log("Tarefa Criada")    
    loginController.criarLogin
});


export default rotaLogin;