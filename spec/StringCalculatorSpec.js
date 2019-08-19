describe("Password validator", ()=>{
    it ("Checks for strong password.", ()=> {
        var raw = ("123OOPs$$5");
        var answer = Add(raw)
        expect(answer).toBe(true);
    })
})
