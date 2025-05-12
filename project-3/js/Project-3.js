// 1. Write a JAVASCRIPT Program to display the multiplication table of a given integer using a while loop.

// let num = prompt("Enter a number:");
// let i = 1;
// while (i <= 10) {
//     console.log(num, " * ", i, " = ", (num * i));
//     i++;
// }

// Example Output (if input is 5):
// 5 * 1 = 5
// 5 * 2 = 10
// ...
// 5 * 10 = 50

// 2. Write a JAVASCRIPT program to calculate the factorial of a given number using a while loop.

// logic :- factorial = 1 * 5 = 5, factorial = 5 * 4 = 20, factorial = 20 * 3 = 60, factorial = 60 * 2 = 120, factorial = 120 * 1 = 120

// num = prompt("Enter a number:");
// let factorial = 1;
// i = num;
// while (i > 0) {
//     factorial *= i; // factorial = factorial * i
//     i--;
// }
// console.log("Factorial of",num ,"is =>",factorial);

// Example Output (if input is 5):
// Factorial of 5 is: 120

// 3. Write a JAVASCRIPT program to find the Armstrong number list of a given number using a do while loop.

// let maxNum = prompt("Enter a number:");
// let num = 1;

// do {
//     let temp = num;
//     let sum = 0;
//     let digits = 0;
//     let temp2 = num;

//     do {
//         digits++;
//         temp2 = temp2 / 10 - (temp2 / 10) % 1; 
//     } while (temp2 > 0);

//     do {
//         let digit = temp % 10;
//         let power = 1;
//         let i = 0;

//         do {
//             power = power * digit;
//             i++;
//         } while (i < digits); 

//         sum = sum + power;
//         temp = temp / 10 - (temp / 10) % 1; 
//     } while (temp > 0);

//     if (sum === num) {
//         console.log(num);
//     }

//     num++;
// } while (num <= maxNum);

// Example Output (if input is 500):
// Armstrong numbers up to 500 are:
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407

// 4.  Write a JAVASCRIPT program to find the palindrome number list of a given number using a while loop

// let num = prompt("Enter a number:");
// let i = 1;

// console.log("Palindrome numbers up to ", num , " are:");

// while (i <= num) {
//     let temp = i;
//     let reversed = 0;

//     while (temp > 0) {
//         let digit = temp % 10;
//         reversed = reversed * 10 + digit;
//         temp = (temp - (temp % 10)) / 10; 
//     }

//     if (reversed === i) {
//         console.log(i);
//     }
//     i++;
// }

// Example Output (if input is 100):
// Palindrome numbers up to 100 are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 55, 66, 77, 88, 99

// 5. Write a JAVASCRIPT program to Calculate the Fibonacci Series of a given number using a while loop.

// num = prompt("Enter the numberof terms:");
// let a = 0, b = 1, nextTerm;
// i = 1;
// console.log("Fibonacci Series up to " , num , " terms:");
// while (i <= num) {
//     console.log(a);
//     nextTerm = a + b;
//     a = b;
//     b = nextTerm;
//     i++;
// }

// Example Output (if input is 7):
// Fibonacci Series up to 7 terms:
// 0, 1, 1, 2, 3, 5, 8

// 6. Write a JAVASCRIPT program to add all the integers between 0 and 30 and display the total using do while loop.

// let sum = 0;
// i = 0;
// do {
//     sum += i; // sum = sum + i
//     i++;
// } while (i <= 30);
// console.log("The sum of all integers between 0 and 30 is: " + sum);

// Output:
// The sum of all integers between 0 and 30 is: 465

// 7.  Write a JAVASCRIPT program which iterates the integers from 1 to 100. For multiples of three print "Fizz" insetad of the number and for the multiples of five print "Buzz". For number which are multiples of both three and five print "FizzBuss" using do while loop.

// i = 1;
// do {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
//     i++;
// } while (i <= 100);

// Example Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, ..., 98, Fizz, Buzz

// 8.  Write a JAVASCRIPT program that display 1-2-3-4-5-6-7-8-9-10 on one line using a for loop. There will be no hyphen(-) at starting and ending porition.

// let result = "";
// for (let i = 1; i <= 10; i++) {
//     result += i;
//     if (i < 10) {
//         result += "-";
//     }
// }
// console.log(result);

// Output:
// 1-2-3-4-5-6-7-8-9-10

// 9.  Write a JAVASCRIPT program that display 1+4+9+16+...+100=385 on one line using a for loop.

// result = "";
// sum = 0;
// for (let i = 1; i <= 10; i++) {
//     let square = i * i;
//     sum += square;
//     result += square;
//     if (i < 10) {
//         result += "+";
//     }
// }
// console.log(result , "=" , sum);

// Output:
// 1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 = 385

// 10. Write a JAVASCRIPT program that display below pattern using nested for loop.
 
// (1). 
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

// for (let i = 5; i >= 1; i--) {
//     let pattern = "";
//     for (let j = 5; j >= i; j--) {
//         pattern += j + " ";
//     }
//     console.log(pattern);
// }

// Output:
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

// (2). 
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// num = 1;
// for (let i = 1; i <= 5; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += num + " ";
//         num++;
//     }
//     console.log(pattern.trim());
// }

// Output:
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15