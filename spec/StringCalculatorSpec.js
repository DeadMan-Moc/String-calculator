describe("Calculator for strings", ()=>{
    it ("Checks if it can add intergers in the string", ()=> {
        var raw = "5,1,0,1a\n3";
        var answer = Add(raw)
        expect(answer).toBe(10);
    })
    it ("Checks if it can add intergers in the string", ()=> {
        var raw = "5,//,1a\n3";
        var answer = Add(raw)
        expect(answer).toBe(8);
    })
    it ("Checks if it can add intergers in the string", ()=> {
        var raw = "5,1,0,1a\n3,-1";
        var answer = Add(raw)
        expect(answer).toBe(9);
    })
    it ("Checks if it can add intergers in the string", ()=> {
        var raw = "-5,1,0,1a\n3";
        var answer = Add(raw)
        expect(answer).toBe(0);
    })
})
