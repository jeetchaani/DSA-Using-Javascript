//Given an integer n, return true if it is a power of two. Otherwise, return false.

function checkPowerTwo(n) {
  var result = 0;
  for (let i = 0; i <= 30; i++) {
    result = Math.pow(2, i);
    if (result == n) {
      return true;
    }
  }
  return false;
}

console.log(checkPowerTwo(16)); //true
console.log(checkPowerTwo(3)); //false

//Code by - @jeetchaani
