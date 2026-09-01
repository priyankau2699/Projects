// Create a student profile using:
// Variables
// Name
// Age
// City
// College
// Array
// Store 5 favorite subjects.
// Object
// Create an employee/student object containing:
// name
// age
// city
// subjects
// isStudent
// Then print:
// Student name
// Student age
// City
// First subject
// Last subject
// Total subjects
// Complete object
let name = "Naveen";
let age = 22;
let city = "Trichy";
let college = "ABC College";

let subjects = [
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "SQL"
];

let student = {
    name: name,
    age: age,
    city: city,
    subjects: subjects,
    isStudent: true
};

console.log("Student Name:", name);
console.log("Student Age:", age);
console.log("City:", city);
console.log("First Subject:", subjects[0]);
console.log("Last Subject:", subjects[subjects.length - 1]);
console.log("Total Subjects:", subjects.length);
console.log("Complete Object:", student);