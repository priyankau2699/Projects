// Task 1 — Variables
// Create variables using var, let, and const.
// Name
// Age
// City
// College
var Name= "Priyanka"
let Age="26"
const City="Udupi"
const College="University of Mysore"

// Print all values.
console.log(Name);
console.log(Age);
console.log(City);
console.log(College);

// Change the var value.
Name="Pinkey"
console.log(Name);

// Change the let value.
Age="24"
console.log(Age);

// Try changing the const value.
// City="hassan"
// console.log(City);

// Try redeclaring each variable and observe what happens.
// var Name= "Priyanka";
// var Name= "Pinkey";

// let Age="26";
// let Age="24";

// const City = "Udupi";
// const City = "Bangalore";

// Task 2 — Printing Statements
// Use:
// console.log()
console.log("Hello priyanka");
// alert()
// alert("Welcome");
// confirm()
// confirm("Do you want to continue");
// prompt()
// let name =prompt("Enter your name");
// console.log("your name is:"name);

// document.writeln()
document.writeln("Hello! This is printed on the webpage.");

// Task 3 — User Details
// Get from the user:
// Name
// Age
// City
// Qualification
// let name= prompt("Enter your name:");
// let age= prompt("Enter your age:");
// let city=prompt("Enter your city:");
// let Qualification=prompt("Enter your qualification");

// console.log("name:",name);
// console.log("age:",age);
// console.log("city:",city);
// console.log("Qualification:",Qualification);

// Task 4 — Find Data Types
// Create variables containing:
let value1 = "JavaScript";
let value2 = 100;
let value3 = 99.5;
let value4 = true;
let value5 = false;
let value6 = undefined;
let value7 = null;

console.log(typeof value1);
console.log(typeof value2);
console.log(typeof value3);
console.log(typeof value4);
console.log(typeof value5);
console.log(typeof value6);
console.log(typeof value7);

// Task 5 — Student Array
// Create an array containing:
// Student names
// Example:
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
// Print:
// First student
console.log(students[0]);
// Second student
console.log(students[1]);
// Last student
console.log(students[students.length-1]);
// Total students
console.log(students.length);

// Task 6 — Employee Object
// Create an employee object containing:
let employee={
    name:"Shishi",
    age:24,
    role:"Frontend" ,
    skills:["Javascript","HTML","CSS"],
    isWorking:true,
    qualification:["Bsc"]
}

// Print:
console.log("Employee Name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);

// 🔵 Arithmetic Operator Tasks
// Task 7 — Calculator
// Create:
// let a = 20;
// let b = 5;
// Calculate:
// Addition
// console.log(a+b);
// // Subtraction
// console.log(a-b);
// // Multiplication
// console.log(a*b);
// // Division
// console.log(a/b);
// // Modulus
// console.log(a%b);
// // Exponentiation
// console.log(a**b);

// Task 8 — Shopping Bill
// Create:
let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;
let Bag = 799;
// Calculate:
let totalPrice = Shirt + Pant + Shoes + Bag;
console.log("Total Price:", totalPrice);

// Task 9 — Increment & Decrement
// Find the output without running the code first.
// A
// let a = 10;

// let b = a++;

// console.log(a);
// console.log(b);

// let a = 10;

// let b = ++a;

// console.log(a);
// console.log(b);

// let a = 10;

// let b = a--;

// console.log(a);
// console.log(b);

// let a = 10;

// let b = --a;

// console.log(a);
// console.log(b);

// Task 10
// let num = 10;
// Perform separately:
// num += 5;
// console.log(num);
// num -= 3
// console.log(num);
// num *= 2
// console.log(num);
// num /= 4
// console.log(num);
// num %= 3
// console.log(num);
// num **= 2
// console.log(num);

// Task 11 — Find Output
// // Predict the result:
// console.log(10 > 5);       // true
// console.log(10 < 5);       // false
// console.log(10 >= 10);     // true
// console.log(10 <= 9);      // false
// console.log(5 == "5");     // true
// console.log(5 === "5");    // false
// console.log(10 != "10");   // false
// console.log(10 !== "10");  // true

// Task 12 — AND
// Find the output:
// console.log(true && true);   // true
// console.log(true && false);  // false
// console.log(false && true);  // false
// console.log(false && false); // false

// Task 13 — OR
// console.log(true || true);   // true
// console.log(true || false);  // true
// console.log(false || true);  // true
// console.log(false || false); // false

// Task 14 — NOT
// console.log(!true);       // false
// console.log(!false);      // true
// console.log(!(5 > 10));   // true
// console.log(!(10 > 5));   // false

// Task 15 — Combination

// console.log(5 == "5" && !(5 === 5) || 6 > 7);  // false
// console.log(10 > 5 && 8 < 12 || 4 === "4");    // true
// console.log(7 === 7 && 10 != "10" || 5 >= 5);  // true
// console.log(15 < 10 || 20 > 15 && 5 == "5");   // true

// Task 16 — Voting
// let age = 20;
// console.log(age>= 18?"Eligible to vote":"Not eligible")

// Task 17 — Password
// let password = true;
// console.log(password?"Login successful":"Wrong password")

// Task 18 — User Introduction
// let name = "Naveen";
// let age = 25;
// let city = "Trichy";
// Print:

// // Using +
// console.log("My name is "+ name+". I am "+age+"years old"+". I live in " +city)
// Using template literals `${}`
// console.log(`My name is ${name}. I am ${age} years old. I live in ${city}`);

// Task 19 — String Conversion
// let a= String(100);
// let b= String(true);
// let c= String(undefined);
// let d= String(null);
// let e= String([1, 2]);

// console.log(a,typeof(a));
// console.log(b,typeof(b));
// console.log(c,typeof(c));
// console.log(d,typeof(d));
// console.log(e,typeof(e));

// Task 20 — Number Conversion

// console.log(Number());            // 0
// console.log(Number(""));          // 0
// console.log(Number("123"));       // 123
// console.log(Number("a1"));        // NaN
// console.log(Number(true));        // 1
// console.log(Number(false));       // 0
// console.log(Number(undefined));   // NaN
// console.log(Number(null));        // 0

// Task 21 — Boolean Conversion

// console.log(Boolean());           // false
// console.log(Boolean(""));         // false
// console.log(Boolean("hello"));    // true
// console.log(Boolean(123));        // true
// console.log(Boolean(true));       // true
// console.log(Boolean(false));      // false
// console.log(Boolean(undefined));  // false
// console.log(Boolean(null));       // false
// console.log(Boolean([]));         // true
// console.log(Boolean({}));         // true

// Task 22 — Voting Eligibility
// let age = prompt("Enter your age");
// if(age>=18){
//     console.log("You can vote");
// }
// else{
//     console.log("You can't vote");
// }

// Task 23 — Positive or Negative
// let number= prompt("Enter the Interger:");
// if(number>0){
//     console.log("positive");
// }
// else if(number<0){
//     console.log("Negative");
// }
// else{
//     console.log("Zero");
// }

// Task 24 — Grade System
// let mark= prompt("Enter your mark:");
// if(90<=mark && mark<=100){
//     console.log("A grade");
// }
// else if(80<=mark && mark<90){
//      console.log("B Grade");
// }
// else if(70<=mark && mark<80){
//      console.log("C Grade");
//  }
// else if(60<=mark && mark<70){
//     console.log("D Grade");
// }
// else{
//      console.log("Fail");
// 55}

// Task 25 — Job Eligibility

// let age = prompt("Enter your age:");
// let height = prompt("Enter your height:");
// let weight = prompt("Enter your weight:");

// if(age>=18){
//     if(height>=160){
//         if(weight>=60){
//             console.log("Congratulations! You are selected.");
//         }
//         else{
//             console.log("Under Weight. Not selected");
//         }
//     }
//     else{
//         console.log("Lower height. Not selected");
//     }
// }
// else{
//     console.log("Under age. Not selected");
// }

// Task 26 — Traffic Light
// let signalColor = prompt("Enter the signal color:");
// switch (signalColorre) {
//     case "red":
//         console.log("Stop");
//         break;

//     case "yellow":
//         console.log("Ready");
//         break;

//     case "green":
//         console.log("Go");
//         break;

//     default:
//         console.log("Invalid color");
// }

// Task 27 — Day

// let day = 1;
// switch(day){
//     case 1: console.log("Monday"); break;
//     case 2: console.log("Tuesday"); break; 
//     case 3: console.log("Wednesday"); break;
//     case 4: console.log("Thursday"); break;
//     case 5: console.log("Friday"); break;
//     case 6: console.log("Saturday"); break;
//     case 7: console.log("Sunday"); break;
//     default: console.log("Invalid day"); break;
// }
// Task 28 — Student Result System
// Step 1 — Get user details
let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let city = prompt("Enter your city:");

// Step 2 — Get marks
let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));

// Step 3 — Calculate Total and Average
let total = tamil + english + maths;
let average = total / 3;

// Step 4 — Check Grade
let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

// Step 5 — Check Voting
let voting;

if (age >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}

// Step 6 — Display result
console.log(`
Name: ${name}
Age: ${age}
City: ${city}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);
