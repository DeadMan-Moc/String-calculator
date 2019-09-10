describe("Calculator for strings", ()=>{

    it ("Sum of 2 numbers", ()=> {
        var raw = (1,2);
        var answer = Add(raw)
        expect(answer).toBe(3);
    })

    it ("Sum of 2 numbers", ()=> {
        var raw = (5,3);
        var answer = Add(raw)
        expect(answer).toBe(8);
    })
    
    it ("Checks if it can add intergers in the string", ()=> {
        var raw = (5,1,0,1,3,-1);
        var answer = Add(raw)
        expect(answer).toThrow(new Error("Negative numbers not allowed"));
    })
    
    it ("Checks if it can add intergers with delimiters", ()=> {
        var raw = ("1,\n");
        var answer = Add(raw)
        expect(answer).toThrow(new Error("Error cannot be added"));
    })
    
    it ("Sum of multiple numbers with delimiters", ()=> {
        var raw = ("1\n2,3");
        var answer = Add(raw)
        expect(answer).toBe(6);
    })

    it ("Checks if it can add intergers with delimiters", ()=> {
        var raw = ("//;\n1;2");
        var answer = Add(raw)
        expect(answer).toBe(3);
    })
})
