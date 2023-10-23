//without using any inbuilt function
function reverseInteger(x) {
  var reverseInt = 0;
  while (x !== 0) {
    let lastDigit = x % 10;

    reverseInt = reverseInt * 10 + lastDigit;

    x = Math.trunc(x / 10);
  }
  return reverseInt;
}

//using inbuilt function
function reverseString(str) {
  return str.toString().split("").reverse().join("");
}

console.log(reverseInteger(123));
console.log(reverseString(452));
