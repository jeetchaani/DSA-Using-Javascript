/* Arrays In Javascript */

//Creating arrays
const loveSmileys = ["❤️", "😍", "😘", "💖", "💕", "💞"];

//Finding the length of an array
console.log(loveSmileys.length);  //6

//modifying array items
loveSmileys[4] = "💘";
console.log(loveSmileys); //[ '❤️', '😍', '😘', '💖', '💘', '💞' ]

//Finding the index of items in an array
console.log(loveSmileys.indexOf("😘")); //2

//Adding items
loveSmileys.push("😻");
console.log(loveSmileys); //[ '❤️', '😍', '😘', '💖', '💘', '💞', '😻' ]

//remove the last item from the array
loveSmileys.pop();
console.log(loveSmileys); //[ '❤️', '😍', '😘', '💖', '💘', '💞' ]

//Accessing every item
for(smiley of loveSmileys) {
    console.log(smiley);
}
//❤️ 😍 😘 💖 💘 💞

//Code by - @jeetchaani