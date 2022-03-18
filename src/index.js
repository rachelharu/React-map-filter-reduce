// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//   return accumulator + currentNumber;
// });

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

//practice challenge below

import emojipedia from "./emojipedia";

console.log(emojipedia);

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
