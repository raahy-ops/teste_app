//Representação de uma tarefa
export default class Tarefa{

  id: number;
  nome: string;
  descricao: string;

  private static proximoID = 1;

  //inicializar um construtor
  constructor(nome:string, descricao:string){
    this.id = Tarefa.proximoID++;
    this.nome = nome;
    this.descricao = descricao;
    
  }

}
