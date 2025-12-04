const URL_BASE: string = "http://localhost:3000/tarefas";

let tarefa_id: number = 0

const nova_Tarefa = {
  nome: "Tarefa_test",
  descricao: "Descrição_test",
};

const tarefa_atualizada = {
  nome: "Nome da tarefa att",
  descricao: "Descrição da tarefa att",
};

// ---------------------------------------------------------



//  ----------------- Método para puxar todas as tarfeas ----------
test("GET: /tarefas = 200", async () => {
  const res = await fetch(URL_BASE);
  expect(res.status).toBe(200);

  const body = await res.json();
  expect(Array.isArray(body)).toBe(true);
});



// ----------------- Método para criar terefa -------------
test("POST: /tarefas = 201(Criar tarefa)", async () => {
  const res = await fetch(URL_BASE, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(nova_Tarefa),
  });

  expect(res.status).toBe(201);

  const content = await res.json()
  tarefa_id = content.id
  expect(content).toHaveProperty("id")
  expect(content).toHaveProperty("nome")
  expect(content).toHaveProperty("descricao")
});



// ------------ Método para puxar tarefas específicas pelo id -------------
test("GET: /tarefas = 200", async()=>{
  const res = await fetch(`${URL_BASE}/${tarefa_id}`)
  expect(res.status).toBe(200);

  const content = await res.json()
  expect(content).toHaveProperty("nome", nova_Tarefa["nome"])
  expect(content).toHaveProperty("descricao", nova_Tarefa["descricao"])
})



// -------------- Método para Atualizar uma tarefa -------------------
test("PUT: /tarefas/1 = 200 (atualizar tarefa)", async()=>{
  
  const res = await fetch(`${URL_BASE}/${tarefa_id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(tarefa_atualizada)

  })
  expect(res.status).toBe(201);

})



// -------------- Método para Deletar uma tarefa -------------------
test("DELETE: /tarefas/:id = 200 ", async()=>{
  
  const res = await fetch(`${URL_BASE}/${tarefa_id}`, {
    method: "DELETE"
  
  })

  expect(res.status).toBe(200);

  const content = await res.json()
  expect(content).toHaveProperty("id")
  expect(content).toHaveProperty("nome")
  expect(content).toHaveProperty("descricao")

})


// ------------ Testes para erros

test("GET: /tarefas/id == 404", async()=>{
  const res = await fetch(`${URL_BASE}/999999999`)
  expect(res.status).toBe(404);
})


test("POST: /tarefas = 400 (Erro Criar tarefa)", async() => {
  const res = await fetch(URL_BASE, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({})
  })

  expect(res.status).toBe(400);

  const content = await res.json()
  expect(content).toHaveProperty("erro", "dados incompletos")
})
