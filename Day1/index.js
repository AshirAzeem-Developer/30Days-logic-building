/*
✅ Task 1: Find the Maximum Number in an Array
Array:
[12, 7, 25, 3, 18, 9]
Output: Largest number return karo (WITHOUT built-in functions like Math.max)
*/

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

// const str = "Pakistan Zindabad";
// const finalString = str.toLowerCase();

// let count = 0;
// let vowels = [];
// let vowelsDic = ["a", "e", "i", "o", "u"];

// for (let x = 0; x < str.length; x++) {
//   if (vowelsDic.includes(finalString[x])) {
//     if (vowels.includes(finalString[x])) {
//       continue;
//     } else {
//       count += 1;
//       vowels.push(finalString[x]);
//     }
//   }
// }

// console.log("Number of Vowels->", count);
// console.log("Vowels included in the Given String ->", vowels);

/*
✅ Task 3: Reverse a String (Without built-in reverse)
Given: "Ashir"
Output should be: "rihsA"
*/

// let myString = "Ashir";
// let testString = [];

// for (let index = 0; index < myString.length; index++) {
//   // console.log(myString[index]);
//   let lastIndex = myString.length - (index + 1);
//   console.log("last Index is ->", lastIndex);
//   testString.push(myString[lastIndex]);
//   console.log("Last Index Value ->", myString[lastIndex]);
//   console.log("Beginning Index Value -> ", myString[index]);
// }

// console.log("Final String->", testString.toString());

// /* ✅ Task 4: Sum of Array Elements
//  Array: [5, 10, 15, 20]*/

// let arrayElem = [5, 10, 15, 20];

// let Sum = 0;
// for (let index = 0; index < arrayElem.length; index++) {
//   Sum = Sum + arrayElem[index];
// }
// console.log("THis is the Total Sum of Array ==>", Sum);

/*
🔍 Logic Puzzle (5 minutes)

Question:
"Ek aadmi building ke 10th floor par rehta hai. Roz office jaane ke liye woh ground floor tak lift se jaata hai. Lekin jab woh office se wapas aata hai to lift se sirf 7th floor tak jaata hai aur baaki 3 floors seedhiyan chalta hai.
Aisa kyun?"

Ans : Ya to uski Girlfriend 7th floor par rehti ha aur wife 10th par ya phr 2 alag lift heyn aik 10th floor sa ground tak ka liye aur aik ground sa 7th tak jati ha , Aur ya phr banday ki height choti ha .
*/

// ====================== >>> After Checking << ==============================

// ✅ TASK 1 – Find Maximum Number

// ✔ Logic bilkul sahi
// ✔ Loop bhi perfect use kiya
// ❗ Extra forEach loop unnecessary tha — first loop hi kaafi tha.

// 👉 Optimized Version (Tumhare code ko improve karte hue):

// const arr = [2, 1, 25, 3, 18, 9];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log("Max:", max);

// Ye clean, fast, aur interview-friendly approach hai.

// ✅ TASK 2 – Count Vowels

// ✔ Tumne vowels identify bhi kiye
// ✔ ToLowerCase bhi sahi
// ❗ Lekin tum count unique vowels kar rahe ho, total nahi.

// Original Task: Total vowels count karo
// Tumne jo logic likha woh ye nikal raha tha:
// a, i → count = 2 (unique)
// Lekin actual total hote hain 7+

// 👉 Better version (simple & correct):

const str = "Pakistan Zindabad".toLowerCase();
let count = 0;

for (let i = 0; i < str.length; i++) {
  if ("aeiou".includes(str[i])) {
    count++;
  }
}

// console.log("Total Vowels:", count);

// ✅ TASK 3 – Reverse String

// ✔ Tumne logic manually implement kiya
// ✔ Index calculation sahi
// ❗ Only issue: Final output .toString() se commas aa rahe hain.

// 👉 Better: join(""):

let myString = "Ashir";
let reversed = [];

for (let i = 0; i < myString.length; i++) {
  let lastIndex = myString.length - 1 - i;
  reversed.push(myString[lastIndex]);
}

console.log("Reversed:", reversed.join(""));

// Output:
// rihsA

// Perfect.

// ✅ TASK 4 – Sum of Array Elements

// ✔ Logic 100% correct
// ✔ Loop also correct
// No issues at all!

// 🔍 BONUS PUZZLE – Correct Answer

// Aur bhai tumne sahi guess mara!
/* Correct answer:
Woh aadmi chhota hota hai aur lift mein 10 ka button nahi dabaa sakta.
7 tak haath pohanch jaata hai, baaki seedhiyan chalta hai. 😄
*/

// Tumhari soch sahi direction mein chal rahi hai — logic build ho raha hai.

// 🎉 DAY 1 — COMPLETED SUCCESSFULLY!
