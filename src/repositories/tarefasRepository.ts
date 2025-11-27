import { resolve } from "path"
import Tarefa from "../models/task"
import { get } from "http"
import { error } from "console"
import { rejects } from "assert"

const listaDeTarefas: Tarefa[] = []

async function getTarefas():Promise<Tarefa[]|any> {   // tipagem Tipo de uma promessa. Tudo que estiver sempre depois dos dois pontos, é uma tipagem
  return new Promise((resolve, reject)=>{
    return resolve(listaDeTarefas)
  })

}


async function getTarefa(id:number):Promise<Tarefa|any>{
    return new Promise((resolve, reject) =>{
      const tarefa = listaDeTarefas.find(t => t.id === id)
      return resolve(tarefa)
    })

}

// Criar uma Tarefa

async function criarTarefa(dados:Tarefa):Promise<Tarefa>{
    return new Promise((resolve, reject) =>{

      if(!dados.nome || !dados.descricao){
        return reject(new Error("Dados inválidos"))
      }
      const novaTarefa = new Tarefa(dados.nome, dados.descricao)
      listaDeTarefas.push(novaTarefa)
      return resolve(novaTarefa)
    })

}

// Atualiza uma tarefa em específico

async function atualizarTarefa(id:number,dados:Tarefa):Promise<Tarefa>{
    return new Promise((resolve, reject) =>{
        const indice = listaDeTarefas.findIndex(t => t.id === id)
        if ( indice === -1) {
          return reject(new Error("Tarefa não encontrada"))
        }
        listaDeTarefas[indice].nome = dados.nome
        listaDeTarefas[indice].descricao = dados.descricao
        return resolve(listaDeTarefas[indice])
    
    })

}


async function deletarTarefa(id:number): Promise<Tarefa> {
  return new Promise((resolve, reject) => {
    const indice = listaDeTarefas.findIndex(t => t.id === id)
    if ( indice === -1) {
      return reject(new Error("tarefa inexistente"))
    }
    const[tarefa] = listaDeTarefas.splice(indice, 1)
    return resolve(tarefa)
  })
}



export default{
    getTarefas, getTarefa, criarTarefa, atualizarTarefa, deletarTarefa
}
