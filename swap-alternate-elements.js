/* You have been given an array/list(ARR) of 
size N. You need to swap every pair of alternate 
elements in the array/list.
*/

function swapAlternate(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i += 2) {
    if (i + 1 < arr.length) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
}

console.log(swapAlternate([1, 2, 3, 4, 5, 6]));
//output- [ 2, 1, 4, 3, 6, 5 ]

//Code by - @jeetchaani
