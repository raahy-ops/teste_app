const url_base: string = "http://localhost:3001/api/login";
 
let login_id: number = 0
 
const criar = {
    email: "Cleiton@gmail.com",
    senha: "senha123"
}

test("POST /login = 201(Criar Login)", async()=> {
    const res = await fetch(url_base, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(criar)
    });

    expect(res.status).toBe(201);
    const json = await res.json()
    console.log(json);
});