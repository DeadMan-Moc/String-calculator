var add = function(string) {
    var digits = function() {
      var arr = [],tokens = string.split(/[^\d|^-]/),
      for (i = 0; i<tokens.length; i++) {
        arr.push(Number(tokens[i]));
      }
  
      return arr;
    }();
  
    var negatives = function() {
      var arr = [],
          i = 0;
      for(; i<digits.length; i++) {
        if (digits[i] < 0) {
          arr.push(digits[i]);
        }
      }
  
      return arr;
    }();
  
    if (negatives.length) {
      throw "Negatives not allowed: " + negatives.join(', ');
    }
  
    var sum = 0,
        i = 0;
    for (; i<digits.length; i++) {
      sum += digits[i];
    }
    return sum;
  }
  