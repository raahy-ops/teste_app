test("POST: /api/reserva = 200", async()=>{
    // realizar login
    const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "Cleber@gmail.com",
            senha: "123"}
        )
    });
    expect(res.status).toBe(200);
    const token = await res.json()
 
    //realizar reserva
    const resp = await fetch("http://localhost:3000/api/reserva",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        },
        body: JSON.stringify({
            pagamento: "pix",
            quartos: [
                {
                    id: 20,
                    dataInicio: "2026/01/03",
                    dataFim: "2026/01/05",
                },
                {
                    id: 21,
                    dataInicio: "2026/04/02",
                    dataFim: "2026/04/05",
                }
 
            ]
        })
 
    });
    expect(resp.status).toBe(200);
    const json = await resp.json()
    // console.log(json)
})