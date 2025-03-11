// # 1. write a javascript program to find the area of a triangle .(1 mark)

//  formula :- area = 1/2 * b * h

let b = 10, h = 5; 
let a = (0.5 * b * h);

console.log("The Width  of Triangle is :",b);
console.log("The Height  of Triangle is :",h);
console.log("Area of the Triangle :", a);

// Output :- The Width  of Triangle is : 10 , The Height  of Triangle is : 5 , Area of the Triangle: 25

// # 2. write a javascript program to convert temperature to and from celsius , Fahrenheit (1 mark)

// Formulas for Temperature Conversion: -

// 1.Celsius to Fahrenheit:
// F = (C * 9 / 5) + 32

// 2.Fahrenheit to Celsius:
// C = (F − 32) * 5 / 9

// let Celsius = 30;
// let Fahrenheit = (Celsius * 9 / 5) + 32;
// console.log("Celsius into Fahrenheit is :",Fahrenheit);

// Fahrenheit = 86;
// Celsius = (Fahrenheit - 32) * 5 / 9;
// console.log("Fahrenheit into Celsius is :",Celsius);

// Output :- 1. Celsius into Fahrenheit is : 86 , Fahrenheit into Celsius is : 30

// # 3. write a javascript program to find the area of a rectangle .(1 mark)

// formula:-  Area = Length * Width

// let length = 16 , width = 8;  
// let Area = length * width;  

// console.log("The length of rectangle :",length);
// console.log("The width  of rectangle :",width);
// console.log("Area of the rectangle :", Area);

// Output :-The length of rectangle= 16 , The width  of rectangle= 8 , Area of the rectangle: 128 

// # 4. write a javascript program to find the area of a circle .(1 mark)

// formula:-  a = 3.14 * radius ** 2

// let radius = 7;  
// let area = 3.14 * radius ** 2;  
// console.log("The radius of the circle :", radius);
// console.log("Area of the circle :", area);

// Output :- The radius of the circle : 7 , Area of the circle: 153.86

// # 5. write a javascript program to convert to feet into inches .(1 mark)

// formula:- inches = feet * 12

// let feet = 8;  
// let inches = feet * 12;  

// console.log("Feets is :",feet);
// console.log("feet into inches is :",inches);

// Output :- Feets is : 8 , feet into inches is : 96

// # 6. write  a javscript program to calculate given formula. (5 marks)

// (1). (a ** 2) - (b ** 2) = ((a - b) * (a + b))

// let a = 5 , b = 3;

// let LHS = (a ** 2) - (b ** 2);
// let RHS = (a - b) * (a + b);

// console.log("The value of A :",a);
// console.log("The value of B :",b);
// console.log("Result of LHS (a ** 2) - (b ** 2) :", LHS);
// console.log("Result of RHS ((a - b) * (a + b)) :", RHS);

// Output :- The value of A : 5 , The value of B : 3 , Result of LHS (a ** 2) - (b ** 2): 16 , Result of RHS ((a - b) * (a + b)): 16 , LHS = LHS => True

// (2). (a - b) * (a - b) = (a * a) - (2 * a * b) + (b * b)

// let a = 20 , b = 5;  

// let lhs = ((a - b) ** 2) ;  
// let rhs = (a ** 2) - (2 * a * b) + (b ** 2);  

// console.log("The value of A :",a);
// console.log("The value of B :",b);
// console.log("Result of LHS ((a - b) ** 2) :", lhs);  
// console.log("Result of RHS (a ** 2) - (2 * a * b) + (b ** 2) :", rhs);  

// Output :- The value of A : 20 , The value of B : 5 , Result of LHS ((a - b) ** 2) : 225 , Result of RHS (a ** 2) - (2 * a * b) + (b ** 2): 225 , LHS = LHS => True

// (3).  (a + b + c) * (a + b + c)  = (a * a) + (b * b) + (c * c) + (2 * a * b) + (2 * b * c) + (2 * a * c) 

// let a = 2 , b = 3 ,c = 4;

// let left = (a + b + c) ** 2 ;
// let right = (a ** 2) + (b ** 2) + (c ** 2) + (2 * a * b) + (2 * b * c) + (2 * a * c);

// console.log("The value of A :",a);
// console.log("The value of B :",b);
// console.log("Result of Left(a + b + c) ** 2 :", left);
// console.log("Result of Right (a ** 2) + (b ** 2) + (c ** 2) + (2 * a * b) + (2 * b * c) + (2 * a * c):", right);

// Output :- Result of LHS (a + b + c) ** 2  : 81 ,Result of RHS (a ** 2) + (b ** 2) + (c ** 2) + (2 * a * b) + (2 * b * c) + (2 * a * c) : 81 , LHS = LHS => True

// (4).  (a - b - c) * (a - b - c)  = (a * a) + (b * b) + (c * c) - (2 * a * b) - (2 * b * c) + (2 * a * c) 

// let a = 2 , b = 7 ,c = 8;

// let L = (a - b - c) ** 2 ;

// let R = (a ** 2 ) + (b ** 2) + (c ** 2) - (2 * a * b) + (2 * b * c) - (2 * a * c);

// console.log("The value of A :",a);
// console.log("The value of B :",b);
// console.log("Result of Left (a - b - c) ** 2  :", Left);
// console.log("Result of Right (a ** 2 ) + (b ** 2) + (c ** 2) - (2 * a * b) + (2 * b * c) - (2 * a * c) :", Right);
// console.log(L === R);


// Output :- Result of Left (a - b - c) ** 2  : 169 , Result of Right (a ** 2 ) + (b ** 2) + (c ** 2) - (2 * a * b) + (2 * b * c) - (2 * a * c) : 169, LHS = LHS => True

// (5). (a - b) * (a - b) * (a - b) = ( a * a * a) - 3(a * a *b) + 3(a * b *b) - ( b * b * b)

// let a = 8 ,b = 2;

// let L = (a - b)  * (a - b) ** 2;
// let R = (a * a ** 2) - 3 * (a ** 2 * b) + 3 * (a * b ** 2) - (b * b ** 2);

// console.log("The value of A :", a);
// console.log("The value of B :", b);
// console.log("Result of Left (a - b)  * (a - b) ** 2 :", L);
// console.log("Result of Right (a * a ** 2) - 3 * (a ** 2 * b) + 3 * (a * b ** 2) - (b * b ** 2) :", R);
// console.log(L === R);


// Output :- Result of Left (a - b)  * (a - b) ** 2 : 216 , Result of Right (a * a ** 2) - 3 * (a ** 2 * b) + 3 * (a * b ** 2) - (b * b ** 2) : 216, LHS = LHS => True
