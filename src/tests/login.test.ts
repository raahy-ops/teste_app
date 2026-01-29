
const URL_USER:string = "http://localhost:3000/api/login"

    let user_id: number = 0
    const novo_login = {
    email: "teste@gmail.com",
    password: "123"
}

test("POST: /login = 201(Criar login)", async()=>{
        const res = await fetch(URL_USER, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(novo_login)
    })
    expect(res.status).toBe(201);

    const content = await res.json()
    user_id = content.id
    expect(content).toHaveProperty("id")
    expect(content).toHaveProperty("email")
    expect(content).toHaveProperty("password")
})