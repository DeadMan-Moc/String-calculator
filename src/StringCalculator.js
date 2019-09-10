function Add(str){
    let regex = /[/;-\n]/gm;
    if(str.includes("-")){
        throw new Error("negatives not allowed.")
    };
   arguments = str.match(regex)
    if(str == "") {
        return 0;    
    };
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
            if(numbers[i] >= 1001){
                continue;                    
            } else{
                sum = sum + parseInt(arguments[i])
            };
        };
    return sum;
};