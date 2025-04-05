// 1 => Write a simple Javascript program to print expected Output using the following array.
// Sample array : myColour = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,Orange

// let myColour = ["Red", "Green", "White", "Black"];
// console.log("Sample array",myColour);          // Sample array (4) ['Red', 'Green', 'White', 'Black']
// console.log(myColour.join(","));               // Output: Red,Green,White,Black
// console.log(myColour.join("+"));               // Output: Red+Green+White+Black
// console.log(myColour.slice(0, 3).join(","));   // Output: Red,Green,White
// console.log(myColour[0]);                      // Output: Red
// console.log(myColour.slice(1, 3).join(","));   // Output: Green,White
// let newArray = myColour.slice();
// newArray.push("Orange");
// console.log(newArray.join(","));               // Output: Red,Green,White,Black,Orange

// 2 => Write a Javascript program to get the sum of all array elements using for loop and foreach loop.

// function sumUsingForLoop(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// function sumUsingForEach(arr) {
//     let sum = 0;
//     arr.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }
// const number = [1, 2, 3, 4, 5];
// console.log("Sum using for loop:", sumUsingForLoop(number));     
// console.log("Sum using forEach loop:", sumUsingForEach(number)); 

// Output :-
// Sum using for loop: 15 , Sum using forEach loop: 15

// 3 => Write a Javascript program to print a maximum and minimum value of given array.(using function and logic)

// let num = [12, 45, 7, 89, 23, 5, 91, 3];
// function findMaxAndMin(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) max = arr[i];
//         if (arr[i] < min) min = arr[i];
//     }
//     console.log("Maximum value:", max); 
//     console.log("Minimum value:", min); 
// }
// findMaxAndMin(num);

// Output :-
// Maximum value: 91 , Minimum value: 3
  
// 4 => Write a Javascript program to convert all array element into ASCII values.

// function convertToASCII(arr) {
//     let asciiArray = arr.map(str => str.split('').map(char => char.charCodeAt(0))).flat();
//     console.log("ASCII values:", asciiArray);
// }
// let myArray = ["Red", "Green", "Blue"];
// convertToASCII(myArray); 

// Output:- ASCII values [82,101,100,71,114,101,101,110,66,108,117,101]

// 5 => Write a Javascript program to remove negative values using the filter array function.
// numbers = [-23,-20,-17,-12,-5,0,1,5,12,19,20];

// let numb = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

// let positiveNumbers = numb.filter(function(numb) {
//   return numb >= 0;
// });

// console.log("Positive numbers:", positiveNumbers);

// // Output: Positive numbers: (6) [0, 1, 5, 12, 19, 20]

// // 6 => Write a Javascript program using array map() method and return the square of the array element.
// // arr =[2,5,6,3,8,9];

// let arr = [2, 5, 6, 3, 8, 9];

// let squares = arr.map(function(num) {
//   return num * num;
// });

// console.log("Original array:", arr);
// console.log("Squared array:", squares);

// Output :- Original array: (6) [2, 5, 6, 3, 8, 9] , Squared array: (6) [4, 25, 36, 9, 64, 81]

// 7 => Write a Javascript program for sorting an array in ascending descending.

// numbers = [23,20,17,12,5,0,1,5,12,19,20];
// myColor = ["Red","Green","white","Black"];

// let numbers = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

// let ascendingNumbers = numbers.slice().sort(function(a, b) {
//   return a - b;
// });

// let descendingNumbers = numbers.slice().sort(function(a, b) {
//   return b - a;
// });

// console.log("Original Numbers:", numbers);
// console.log("Ascending Order:", ascendingNumbers);
// console.log("Descending Order:", descendingNumbers);

// let myColor = ["Red", "Green", "white", "Black"];

// let ascendingColors = myColor.slice().sort();

// let descendingColors = myColor.slice().sort().reverse();

// console.log("Original Colors:", myColor);
// console.log("Colors Ascending:", ascendingColors);
// console.log("Colors Descending:", descendingColors);

// Output:-
// Original Numbers: (11) [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20]
// Ascending Order: (11) [0, 1, 5, 5, 12, 12, 17, 19, 20, 20, 23]
// Descending Order: (11) [23, 20, 20, 19, 17, 12, 12, 5, 5, 1, 0]
// Original Colors: (4) ['Red', 'Green', 'white', 'Black']
// Colors Ascending: (4) ['Black', 'Green', 'Red', 'white']
// Colors Descending: (4) ['white', 'Red', 'Green', 'Black']

// 8 => Write a Javascript program which filters out any string which is less then 8 characters.

// words = ['Python','Javascript','Go','Java','PHP','Ruby'];

// let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

// let longWords = words.filter(function(word) {
//   return word.length >= 8;
// });

// console.log("Words with 8 or more characters:", longWords);

// Output:- Words with 8 or more characters: ['Javascript']

// 9 => Write a Javascript program to print expected output for the following string.

// X = "airplane"; // output:- r
// x = "oxoxoxox";  // output:- "oXoXoXoX"
// x = "A New Java Book";

// output = "a new java book","A NEW JAVA BOOK" 

// 1. Get the 3rd character from "airplane"

// let X1 = "airplane";
// console.log("Output 1:", X1.charAt(2)); // Output: r (indexing starts from 0)

// // 2. Alternate characters (even index lowercase, odd index uppercase)

// let x2 = "oxoxoxox";
// let result2 = "";

// for (let i = 0; i < x2.length; i++) {
//   if (i % 2 === 0) {
//     result2 += x2[i].toLowerCase();
//   } else {
//     result2 += x2[i].toUpperCase();
//   }
// }

// console.log("Output 2:", result2); // Output: oXoXoXoX

// 3. Convert string to lowercase and uppercase

// let x3 = "A New Java Book";
// let lower = x3.toLowerCase();
// let upper = x3.toUpperCase();

// console.log("Output 3:");
// console.log(lower); // Output: a new java book
// console.log(upper); // Output: A NEW JAVA BOOK

// 10 => Write a Javascript program for array reverse.

// let array = [1, 2, 3, 4, 5];
// let reversedArr = array.slice().reverse();

// console.log("Original Array:", array);
// console.log("Reversed Array:", reversedArr);

// Outpu:-
// Original Array: (5) [1, 2, 3, 4, 5]
// Reversed Array: (5) [5, 4, 3, 2, 1]

// 11 => Write a Javascript program to check if a value is found or not?

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let valueToCheck = "Mango"; 

// if (fruits.includes(valueToCheck)) {
//   console.log(valueToCheck + " is found in the array.");
// } else {
//   console.log(valueToCheck + " is NOT found in the array.");
// }

// Output :- Mango is found in the array.

// 12 => Write a Javascript program to print your name and write the number of total characters.

// let myName = "Jay Prajapati"; 

// console.log("My name is:", myName);
// console.log("Total characters (including spaces):", myName.length);

// let nameWithoutSpaces = myName.split(" ").join("");
// console.log("Total characters (excluding spaces):", nameWithoutSpaces.length);

// Output :- 
// My name is: Jay Prajapati , Total characters (including spaces): 13 , Total characters (excluding spaces): 12

// 13 => Write a Javascript program given this output using replace concept.
// Input :- "I often take a walk with my dog in the evening His dog follows him everywhere. I don't feed my dog in the morning";
// Output :- "I often take a walk with my cat in the evening His cat follows him everywhere. I don't feed my cat in the morning";

// let sentence = "I often take a walk with my dog in the evening His dog follows him everywhere. I don't feed my dog in the morning";

// let newSentence = sentence.replaceAll("dog", "cat");

// console.log("Original Sentence:");
// console.log(sentence);

// console.log("Modified Sentence:");
// console.log(newSentence);

// Output :-
// Original Sentence:
// I often take a walk with my dog in the evening His dog follows him everywhere. I don't feed my dog in the morning
// Modified Sentence:
// I often take a walk with my cat in the evening His cat follows him everywhere. I don't feed my cat in the morning

// 14 => Write a Javascript program convert string to array.

// Input :- "Hire the top 1% freelance devlopers"
// Output :- ["Hire", "the", "top", "1%"]

// let input = "Hire the top 1% freelance devlopers";

// let wordsArray = input.split(" ");

// let result = wordsArray.slice(0, 4);

// console.log(result);

// Output :- (4) ['Hire', 'the', 'top', '1%']

// 15 => Write a JavaScript program to convert an array to string.

// Input :- ['5',32,'Daniel'];
// Output :- 5,32,Daniel

// let inpu = ['5', 32, 'Daniel'];

// let resul = inpu.join(",");

// console.log(resul);

// Output :- 5,32,Daniel