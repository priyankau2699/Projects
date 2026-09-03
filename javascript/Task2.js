// // Task 1 — var, let, const
// // Create three variables:
// // var → student name
// // let → student age
// // const → college name
// var studentName = "Naveen";
// let studentAge = 22;
// const collegeName = "ABC College";
// // Requirements:
// // Print all three values.
// console.log(studentName);
// console.log(studentAge);
// console.log(collegeName);
// // Change the var value.
// studentName = "Priyanka";
// console.log(studentName);
// // Change the let value.
// studentAge = 23;
// console.log(studentAge);
// // Try changing the const value and observe the error.
// // collegeName = "XYZ College";
// // Try redeclaring the var variable.
// var studentName = "Rahul";
// console.log(studentName);
// // Try redeclaring the let variable and observe the error.
// // let studentAge = 25;

// // Task 2 — User Information
// // Get the following information from the user using prompt():
// // Name
// // Age
// // City
// // Print the result in the console.
// // Expected:
// // Name: Naveen
// // Age: 22
// // City: Trichy
// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// let city = prompt("Enter your city:");
// console.log("Name:", name);
// console.log("Age:", age);
// console.log("City:", city);

// // Task 3 — Welcome Message
// // Get the user's name using prompt().
// // Display:
// // Welcome Naveen!
// // Use alert().
// let name = prompt("Enter your name:")
// alert("Welcome"+ "name" + "!")

// // Task 4 — Age Calculator
// // Ask the user for their birth year.
// let birthYear= prompt("Enter your birth year:");
// // Calculate their approximate age using:
// let currentYear=2026;
// // Current Year - Birth Year
// let age = currentYear - birthYear;

// // Print the age in the console.
// console.log("Birth Year:", birthYear);
// console.log("Age:", age);
// // Example:
// // Birth Year: 2000
// // Age: 26

// Task 5 — Identify Data Types
// Create variables containing:
// "Hello"
// 100
// 25.5
// true
// false
// undefined
// null
// Use typeof and print each data type.

// let a = "Hello";
// let b = 100;
// let c = 25.5;
// let d = true;
// let e = false;
// let f = undefined;
// let g = null;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);

// Task 6 — Student Data
// Create an object:
// name
// age
// city
// qualification
// isStudent
// Print:
// Complete object
// Name
// Age
// Qualification
// isStudent
// let student = {
//     name: "Naveen",
//     age: 22,
//     city: "Trichy",
//     qualification: "BSc",
//     isStudent: true
// };

// console.log(student);

// console.log(student.name);
// console.log(student.age);
// console.log(student.qualification);
// console.log(student.isStudent);

// Task 7 — Fruit Array
// Create an array containing 6 fruits.
// Apple
// Mango
// Orange
// Banana
// Grapes
// Papaya
// Print:
// First fruit
// Second fruit
// Last fruit
// Total number of fruits
// let fruits = [
//     "Apple",
//     "Mango",
//     "Orange",
//     "Banana",
//     "Grapes",
//     "Papaya"
// ];

// console.log(fruits[0]); 
// console.log(fruits[1]); 
// console.log(fruits[fruits.length - 1]); 
// console.log(fruits.length);

// Task 8 — Basic Calculator
// Create two numbers:
// let a = 20;
// let b = 5;
// Perform:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponentiation
// Print every result separately.
// let a = 20;
// let b = 5;

// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);
// console.log("Exponentiation:", a ** b); 

// Task 9 — Shopping Bill
// Create:
// Shirt = 999
// Pant = 1499
// Shoes = 1999
// Calculate the total price.
// Expected:
// Total = 4497
// let shirt = 999;
// let pant = 1499;
// let shoes = 1999;

// let total = shirt + pant + shoes;

// console.log("Total:", total);

// Task 11 — Post Increment
// Predict the output before running the code:
// let a = 10;

// let b = a++;

// console.log(a);
// console.log(b);
// Write your expected output first, then run it.
// let a = 10;

// let b = a++;

// console.log(a);
// console.log(b);

// Task 12 — Pre Increment
// Predict the output:
// let a = 10;

// let b = ++a;

// console.log(a);
// let a = 10;

// let b = ++a;

// console.log(a);
// console.log(b);

// Task 13 — Post Decrement
// Predict:
// let a = 20;

// let b = a--;

// console.log(a);
// console.log(b);
// let a = 20;

// let b = a--;

// console.log(a);
// console.log(b);

// Task 14 — Pre Decrement
// Predict:
// let a = 20;

// let b = --a;

// console.log(a);
// console.log(b);
// let a = 20;

// let b = --a;

// console.log(a);
// console.log(b);

// Task 15 — Find the Final Values
// Without running the code, find the output:
// let a = 5;

// let b = a++;

// let c = ++a;

// let d = b--;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// Students should write the answer first and then verify it.
// let a = 5;

// let b = a++;

// let c = ++a;

// let d = b--;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Task 16 — Assignment Operators
// // Given:
// // let num = 10;
// // Perform each operation separately:
// // +=
// let num = 10;

// num += 5;

// console.log(num);
// // -=
// let num = 10;

// num -= 5;

// console.log(num);
// // *=
// let num = 10;

// num *= 5;

// console.log(num);
// // /=
// let num = 10;

// num *= 5;

// console.log(num);
// // %=
// let num = 10;

// num %= 3;

// console.log(num);
// // **=
// let num = 10;

// num **= 2;

// console.log(num);
// // Example:
// // num += 5;
// // console.log(num);

// Task 17
// let name = "Naveen";
// let age = 22;
// let city = "Trichy";
// let college = "ABC College";

// let subjects = [
//     "JavaScript",
//     "HTML",
//     "CSS",
//     "Python",
//     "SQL"
// ];

// let student = {
//     name: name,
//     age: age,
//     city: city,
//     subjects: subjects,
//     isStudent: true
// };

// console.log("Student Name:", name);
// console.log("Student Age:", age);
// console.log("City:", city);
// console.log("First Subject:", subjects[0]);
// console.log("Last Subject:", subjects[subjects.length - 1]);
// console.log("Total Subjects:", subjects.length);
// console.log("Complete Object:", student);

// Get two numbers from the user using prompt().
// Perform:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Power
// Then display all results using console.log().
// let num1 = prompt("Enter first number:");
// let num2 = prompt("Enter second number:");

// console.log("Addition:", num1 + num2);
// console.log("Subtraction:", num1 - num2);
// console.log("Multiplication:", num1 * num2);
// console.log("Division:", num1 / num2);
// console.log("Modulus:", num1 % num2);
// console.log("Power:", num1 ** num2);