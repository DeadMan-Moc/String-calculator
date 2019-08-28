describe("Calculator for strings", ()=>{
    Calculator = new Calculator;
    it ("Checks if it can add intergers in the string", ()=> {
        var raw = "5,1,0,1,3";
        var answer = Calculator.Add(raw)
        expect(answer).toBe(10);
    })
    it ("Checks if it can add intergers in the string", ()=> {
        var raw = "5,1,3";
        var answer = Add(raw)
        expect(answer).toBe(9);
    })
    it ("Checks if it can add intergers in the string", ()=> {
        var raw = "5,1,0,1,3,-1";
        var answer = Add(raw)
        expect(answer).toBe(9);
    })
    it ("Checks if it can add intergers in the string", ()=> {
        var raw = "-5,1,0,1,3";
        var answer = Add(raw)
        expect(answer).toBe(0);
    })
})
