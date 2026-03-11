
test("POST: /api/quartosDisponiveis = 200", async()=>{
    const resp = await fetch("http://localhost:3000/api/quartosDisponiveis",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            inicio:"2026/05/30",
            fim:"2026/06/01",
            quantidade:1
        })
    });
    expect(resp.status).toBe(200);
    const json = await resp.json()
    console.log(json)
})