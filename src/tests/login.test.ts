const url_base :string = "http://localhost:3000/api/login";  
 
test("POST / login = 200", async () => {
    const res = await fetch(url_base, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "Cleiton@gmail.com",
            senha: "senha123"}
            
        )
    }); 
    const json = await res.json()
   console.log(json);
    expect(res.status).toBe(200);
   
});


test("POST / login(sem senha) = 400", async () => {
    const res = await fetch(url_base, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "teste@email.com",
            senha: ""}
        )
    });
    expect(res.status).toBe(400);
});


// test("POST / create = 200", async () => {
//    const res = await fetch(url_base + "/cadastro" , {
//        method: "POST",
//        headers: { "Content-Type": "application/json" },
//        body: JSON.stringify({
//            nome: "Yasmin1",
//            email: "y@email.com",
//            senha: "senha123",
//            telefone: "15981331301",
//            cpf:"125456789-59"
//        })
//    });
//     expect(res.status).toBe(200);
//     const token = await res.json();
//     console.log(token)
// });