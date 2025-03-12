// # 1. write a javascript program to find the area of a triangle .(1 mark)

//  formula :- area = 1/2 * b * h

// let b = 10, h = 5; 
// let area = (0.5 * b * h);

// console.log("The Width  of Triangle is :",b);
// console.log("The Height  of Triangle is :",h);
// console.log("Area of the Triangle :", area);

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

// let L = (a ** 2) - (b ** 2);
// let R = (a - b) * (a + b);

// console.log("The value of A :",a);
// console.log("The value of B :",b);
// console.log("Result of L (a ** 2) - (b ** 2) :", L);
// console.log("Result of R ((a - b) * (a + b)) :", R);
// console.log(" L === R :" , L === R);

// Output :- The value of A : 5 , The value of B : 3 , Result of L (a ** 2) - (b ** 2): 16 , Result of R ((a - b) * (a + b)): 16 , L === R => true

// (2). (a - b) * (a - b) = (a * a) - (2 * a * b) + (b * b)

// let a = 20 , b = 5;  

// let L = ((a - b) ** 2) ;  
// let R = (a ** 2) - (2 * a * b) + (b ** 2);  

// console.log("The value of A :",a);
// console.log("The value of B :",b);
// console.log("Result of L ((a - b) ** 2) :", L);  
// console.log("Result of R (a ** 2) - (2 * a * b) + (b ** 2) :", R); 
// console.log(" L === R :" , L === R);

// Output :- The value of A : 20 , The value of B : 5 , Result of L ((a - b) ** 2) : 225 , Result of R (a ** 2) - (2 * a * b) + (b ** 2): 225 , L === R => true

// (3).  (a + b + c) * (a + b + c)  = (a * a) + (b * b) + (c * c) + (2 * a * b) + (2 * b * c) + (2 * a * c) 

// let a = 2 , b = 3 ,c = 4;

// let L = (a + b + c) ** 2 ;
// let R = (a ** 2) + (b ** 2) + (c ** 2) + (2 * a * b) + (2 * b * c) + (2 * a * c);

// console.log("The value of A :",a);
// console.log("The value of B :",b);
// console.log("Result of L(a + b + c) ** 2 :", L);
// console.log("Result of R (a ** 2) + (b ** 2) + (c ** 2) + (2 * a * b) + (2 * b * c) + (2 * a * c):", R);
// console.log(" L === R :" , L === R); 

// Output :- Result of L (a + b + c) ** 2  : 81 ,Result of R (a ** 2) + (b ** 2) + (c ** 2) + (2 * a * b) + (2 * b * c) + (2 * a * c) : 81 , L === R => true

// (4).  (a - b - c) * (a - b - c)  = (a * a) + (b * b) + (c * c) - (2 * a * b) - (2 * b * c) + (2 * a * c) 

// let a = 2 , b = 7 ,c = 8;

// let L = (a - b - c) ** 2 ;

// let R = (a ** 2 ) + (b ** 2) + (c ** 2) - (2 * a * b) + (2 * b * c) - (2 * a * c);

// console.log("The value of A :",a);
// console.log("The value of B :",b);
// console.log("Result of L (a - b - c) ** 2  :", L);
// console.log("Result of R (a ** 2 ) + (b ** 2) + (c ** 2) - (2 * a * b) + (2 * b * c) - (2 * a * c) :", R);
// console.log(" L === R :" , L === R); 

// Output :- Result of L (a - b - c) ** 2  : 169 , Result of R (a ** 2 ) + (b ** 2) + (c ** 2) - (2 * a * b) + (2 * b * c) - (2 * a * c) : 169, L === R => true

// (5). (a - b) * (a - b) * (a - b) = ( a * a * a) - 3(a * a *b) + 3(a * b *b) - ( b * b * b)

// let a = 8 ,b = 2;

// let L = (a - b)  * (a - b) ** 2;
// let R = (a * a ** 2) - 3 * (a ** 2 * b) + 3 * (a * b ** 2) - (b * b ** 2);

// console.log("The value of A :", a);
// console.log("The value of B :", b);
// console.log("Result of L (a - b)  * (a - b) ** 2 :", L);
// console.log("Result of R (a * a ** 2) - 3 * (a ** 2 * b) + 3 * (a * b ** 2) - (b * b ** 2) :", R);
// console.log(" L === R :" , L === R); 

// Output :- Result of L (a - b)  * (a - b) ** 2 : 216 , Result of R (a * a ** 2) - 3 * (a ** 2 * b) + 3 * (a * b ** 2) - (b * b ** 2) : 216, L === R => true
