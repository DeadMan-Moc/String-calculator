describe("Calculator for strings", ()=>{
    
    it ("Sum of multiple integers", ()=> {
        var raw = (-1, -1);
        var answer = calculate.Add(raw)
        expect(answer).toBe();
    })
    it ("Sum of 2 integers", ()=> {
        var raw = (5,3);
        var answer = Add(raw)
        expect(answer).toBe(8);
    })
    it ("Checks if it can add intergers in the string", ()=> {
        var raw = [5,1,0,1,3,-1];
        var answer = calculate.Add(raw)
        expect(answer).toBe(9);
    })
    it ("Add multiple numbers", ()=> {
        var raw = (-5,1,0,1,3);
        var answer = calculate.Add(raw)
        expect(answer).toBe(0);
    })
})
