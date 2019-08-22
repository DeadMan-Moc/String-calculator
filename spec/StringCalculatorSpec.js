describe("Password validator", ()=>{
    it ("Checks for strong password.", ()=> {
        var raw = "5,1,0,1a\n3";
        var answer = Add(raw)
        expect(answer).toBe(10);
    })
})
