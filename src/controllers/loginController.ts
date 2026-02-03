import { Request, Response, NextFunction } from "express";
import loginRepository from "../repositories/loginRepository";  
 
async function CriarLogin(req:Request, res:Response, next:NextFunction){
 
  const{email, senha} = req.body;

  if(!email || !senha){
    return res.status(400).json({erro:"Email e senha são obrigatórios"})
  }

  if(email.trim() === "" || senha.trim() === ""){
    return res.status(400).json ({erro:"Email e senha estão vazios"})
  }

try{
    const result = await loginRepository.validarLogin(email);
    if(!result){throw new Error()}
    
    console.log(result.email)
    console.log(result.senha)
    return res.sendStatus(201);
  
  } catch (error) {
    return res.status(201).json({erro: "Credenciais invalidas!"})
  }


}
 
export default {
  CriarLogin
};