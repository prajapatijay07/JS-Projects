// Q - 1 Enter Electricity UNIT and Calculate amount to pay
 // => For first 50 units , Rs: 1/unit
//  => For next 100 units , 2/unit
//  => For next 100 units , 3/units
//  => For units above 250 , 4/units
//  => For all bills above 150 units an additional surcharge of 20% of total bill amount is added.

let units = 297; 
let amount = 0; 

if (units <= 50) {
    amount = units * 1; 
} 
else if (units <= 150) {
    amount = (50 * 1) + ((units - 50) * 2); 
} 
else if (units <= 250) {
    amount = (50 * 1) + (100 * 2) + ((units - 150) * 3); 
} 
else {
    amount = (50 * 1) + (100 * 2) + (100 * 3) + ((units - 250) * 4);
}

if (units > 150) {
    amount = amount + (amount * 0.2); 
}

console.log("Total Electricity Bill Amount is Rs.", amount);

// Output :- Total Electricity Bill Amount is Rs. 885.6

// Q - 2 Write a JAVA SCRIPT program to print season according user input using switch case. (e.g. 1 to 4 for "Winter", 5 to 8 for "Summer", 9 to 12 for "Monsoon" then add any number print "Invalid season" etc.) 

let month = 7; 

switch (true) {
    case (month >= 1 && month <= 4):
        console.log("This is a Winter Season");
        break;
    case (month >= 5 && month <= 8):
        console.log("This is a Summer Season");
        break;
    case (month >= 9 && month <= 12):
        console.log("This is a Monsoon Season");
        break;
    default:
        console.log("This is a Invalid season");
}

// Output :- This is a Summer Season

// Q - 3  Write a JAVA SCRIPT program to find rate based on year and calculate total interest using nested if. (I = PRN/100) Principal Amout (P) Interest Rate
// No. of Years (N)
// (if 3<N<=5 then R is 3 | if 5<N<=8 then R is 5 | if 8<N<=12 then R is 12 | else R is 15)

let P = 10000; 
let N = 6;    
let R;         

if (N > 3) {
    if (N <= 5) {
        R = 3; 
    } else if (N <= 8) {
        R = 5;
    } else if (N <= 12) {
        R = 12; 
    } else {
        R = 15; 
    }
} else {
    R = 15; 
}

let I = (P * R * N) / 100;

console.log("Principal Amount: Rs.", P);
console.log("Number of Years: ", N);
console.log("Interest Rate: ", R , "%");
console.log("Total Interest: Rs.", I);

// Output :- Principal Amount: Rs. 10000, Number of Years:  6, Interest Rate:  5 %, Total Interest: Rs. 3000

// 4. write a javacsript program to check voting eligibility.

let a = 18;

if (a >= 18) {
    console.log("You are Eligible for Voting");
} else {
    console.log("you are Not Eligible for Voting");
}

// Output :- You are Eligible for Voting

// 5. Write a javascript program to classify Age Groups.

let age = 67;

switch (true) {
    case (age >= 0 && age <= 12):
        console.log("Child");
        break;
    case (age >= 13 && age <= 19):
        console.log("Teenager");
        break;
    case (age >= 20 && age <= 59):
        console.log("Adult");
        break;
    case (age >= 60):
        console.log("Senior");
        break;
    default:
        console.log("Invalid Age! Please enter a valid number.");
}


// Output :- Senior