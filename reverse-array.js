//reverse an array

//without using inbuilt function
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  let temp = 0;
  while (start <= end) {
    //swap element
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
let arrayList = [2, 5, 1, 6, 3, 0, 7];
console.log(reverseArray(arrayList));

//using inbuilt function
console.log(arrayList.reverse());

//Code by - @jeetchaani