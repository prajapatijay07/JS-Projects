// 1. Write a JAVASCRIPT Program to print a greeting message using with argument no return type function 
// when call a function without argument at that time print message Good Morning.

function greet(message = "Good Morning") {
    console.log(message);
}

greet("Hello, World!"); // Output: Hello, World!
greet(); // Output: Good Morning

// 2. Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type with argument function.

function circleArea(radius) {
    const pi = 22 / 7;
    console.log("Area of Circle:", pi * radius * radius);
}

let area = circleArea(5); 
// Output: Area of Circle: 78.57142857142857

// 3. Write a JAVASCRIPT Program to find Triangle area (area = (l*h)/2) using return type with argument function.

function findTriangleArea(length, height) {
    console.log("Area of Triangle:", (length * height) / 2);
}

findTriangleArea(10, 5); 
// Output: Area of Triangle: 25

// 4. Write a JAVASCRIPT Program to find Rectangle area = l * h using return type with argument function.

function findRectangleArea(length, height) {
    console.log("Area of Rectangle:", length * height);
}

findRectangleArea(10, 5); 
// Output: Area of Rectangle: 50

// 5. Write a JAVASCRIPT Program to find ans of ((b*b) - (4*a*c)) / (2*a) using return type with argument function.

function calculateExpression(a, b, c) {
    console.log("Result:", ((b * b) - (4 * a * c)) / (2 * a));
}

calculateExpression(1, 4, 2); 
// Output: Result: 3

// 6. Write a JAVASCRIPT Program to find ans of (a*a)+(2*a*b)+(b*b) using return type with argument function.

function calculateExpression(a, b) {
    console.log("Result:", (a * a) + (2 * a * b) + (b * b));
}

calculateExpression(4, 5); 
// Output: Result: 81

// 7. Write a JAVASCRIPT Program to Convert Fahrenheit to Celsius (c = (f - 32)/1.8) using return type with argument function.

function fahrenheitToCelsius(fahrenheit) {
    console.log("Celsius:", (fahrenheit - 32) / 1.8);
}

fahrenheitToCelsius(60); 
// Output: Celsius: 15.555555555555555

// 8. Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f = (c*1.8)+32) using return type with argument function.

function celsiusToFahrenheit(celsius) {
    console.log("Fahrenheit:", (celsius * 1.8) + 32);
}

celsiusToFahrenheit(100); 
// Output: Fahrenheit: 212

// 9. Write a JAVASCRIPT Program to find if a given number is odd or even using an argument with no return type.

function checkOddEven(number) {
    if (number % 2 === 0) {
        console.log(number, "is Even.");
    } else {
        console.log(number, "is Odd.");
    }
}

checkOddEven(16); 
// Output: 16 is Even.
checkOddEven(7);  
// Output: 7 is Odd.

// 10. Write a JAVASCRIPT Program to swap a value Without third variable using with argument no return type.

function swapValues(a, b) {
    console.log("Before Swap: a =", a, ", b =", b);

    a = a + b;
    b = a - b;
    a = a - b;

    console.log("After Swap: a =", a, ", b =", b);
}

swapValues(5, 10); 
// Output: 
// Before Swap: a = 5 , b = 10
// After Swap: a = 10 , b = 5