// const arr = [2, 1, 25, 3, 18, 9];

// let low = 0;
// let high = 0;

// for (let index = 0; index < arr.length; index++) {
//   if (high < arr[index]) {
//     high = arr[index];
//   }
// }

// arr.forEach((element) => {
//   high < element
//     ? (high = element)
//     : console.log("High contains higher value at ->", element);
// });

// console.log("This is the Highest Number from the Array ->", high);

/*
✅ Task 2: Count Vowels in a String
String: "Pakistan Zindabad"
*/

const str = "Pakistan Zindabad";

const finalString = str.toLowerCase();

let count = 0;
let vowels = [];
let vowelsDic = ["a", "e", "i", "o", "u"];

for (let x = 0; x < str.length; x++) {
  if (vowelsDic.includes(finalString[x])) {
    if (vowels.includes(finalString[x])) {
      continue;
    } else {
      count += 1;
      vowels.push(finalString[x]);
    }
  }
}

console.log("Number of Vowels->", count);
console.log("Vowels included in the Given String ->", vowels);
