const URL_BASi: string = "http://localhost:3001/api/login";
 
let login_id: number = 0
 
const criar = {
    email: "Raissa2@gmail.com",
    senha: "123"
}
 
test("POST: /login = 201(Criar login)", async()=>{
    const res = await fetch(URL_BASi, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(criar)
    })
    expect(res.status).toBe(201);
 
    // const content = await res.json()
    // login_id = content.id
    // expect(content).toHaveProperty("id")
    // expect(content).toHaveProperty("email")
    // expect(content).toHaveProperty("senha")
})