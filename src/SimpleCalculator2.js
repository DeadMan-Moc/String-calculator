class Calculator{
  constructor(){
     this.array = [];
  }
  Add(){
      let sum = 0;
      for(let i = 0; i < arguments.length; i++){
          sum += parseFloat(arguments[i]);
          this.Last = sum;
  }
  return sum;
  }
  Multiply(){
      let sum = 1;
      for(let i = 0; i < arguments.length; i++){
          sum *= parseInt(arguments[i]);
          this.Last = sum;
      }
      return sum;
  }
  Last(){
      return this.Last;
  }
  set_slot(number){
      this.array.push(this.Last);
      return this.array[number - 1];
  }
  get_slot(number){
      return this.array[number - 1];
  }
 }

 let Calculator = new calculator;