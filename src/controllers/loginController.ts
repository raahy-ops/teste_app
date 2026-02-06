import { Request, Response, NextFunction } from "express";
import loginRepository from "../repositories/loginRepository";  
import { validarSenha } from "../utils/senha" 
import { json } from "stream/consumers";
import { createJWT } from "../utils/jwt";


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
    
    if(!result){throw new Error("Login incorreto")}

    // VALIDA SENHA DE LOGIN
    const resultSenha = await validarSenha(senha, result.senha)
     if(!resultSenha){ throw new Error("Senha invalida")}

     // REMOVE A SENHA DO OBJETO
    const {senha:_senha, ...usuario} = result

    

    // CRIAR TOKEN DE USUARIO

    const token = createJWT(usuario)
    return res.status(201).json(token);
  

  } catch (error) {
    return res.status(201).json({erro: "Credenciais invalidas!"})
  }
}


export default {
CriarLogin
};