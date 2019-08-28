class Calculator{
  constructor(){
     this.array = [];
  }
  // Add(){
  //     let sum = 0;
  //     for(let i = 0; i < arguments.length; i++){
  //         sum += arguments[i]
  //         this.Last = sum;
  // }
  // return sum;
  // }

  Add() {
    var sum = 0;
    var arr = [];
    for (let i in arr) {
      sum = sum + arr[i];
      this.Last = sum;
    }
    return sum;
}
  Multiply(){
    var sum = 1;
    var arr = [];
    for (let i in arr) {
      sum = sum * arr[i];
      this.Last = sum;
    }
    return sum;
  }
  // Last(){
  //     return this.Last;
  // }
  // set_slot(number){
  //     this.array.push(this.Last);
  //     return this.array[number - 1];
  // }
  // get_slot(number){
  //     return this.array[number - 1];
  // }
 }

 let calculate = new Calculator;