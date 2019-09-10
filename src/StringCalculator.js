 var Add = function(string) {

    //splits given string with the regex.
    //
    var digits = function() {
      var array = [];
      var str2Splitted;
      str2Splitted = string.split(/[^\d|^-]/);
      for (i = 0; i < str2Splitted.length; i++) {
        array.push(Number(str2Splitted[i]));
      }
      return array;
    }();


    //checks for negativesmin the array.
    //if found it pushes it to array
    var Neg = function() {
      var array = [];

      for(var  i = 0; i < digits.length; i++) {
        if (digits[i] < 0) {
          array.push(digits[i]);
        }
      }

      return array;
    }();

    //adds all digits in the array to sum
    var sum = 0;
    for (var i = 0; i < digits.length; i++) {
      sum = sum + digits[i];
    }
    return sum;
  }
