//*What is a variable in JavaScript?
//  A variable is a container used to store data/ value
// *What are the three keywords used to create variables?
// var,let,const
// *Write the syntax to create a variable using var.
// var age=25
// *Write the syntax to create a variable using let.
// let age=25
// *Write the syntax to create a variable using const.
// const age=25
// *What is declaration?
// Creating a variable without assigning a value. ex: let age;
// *What is initialization?
// Giving a value to a variable when it is created. let age:25;
// *What is reassignment?
// Changing the value of an existing variable.
// let age = 25;
// age = 30;
// *What is redeclaration?
// Creating the same variable again using the same keyword.
// var age = 25;
// var age = 30;
// *Which keyword allows redeclaration?
// var
// *Which keyword allows reassignment?
// var & let
// *Which keyword requires initialization when declared?
// const
// *Identify the declaration and initialization:
// *let age = 25;
// let age - declaration & =25 initialization
// *What is the value of a?
// *var a = 100;
// *console.log(a);
// 100
//*Change the value of this variable to 200:
// *let number = 100;
// number=200
// *var
// *What will be the output?
// var a = 10;
//* console.log(a);
// 10
// *What will be the output?
//* var a = 10;
// *a = 20;
// 20
// *console.log(a);
// *What will be the output?
// *var a = 10;
// *var a = 30;
// *console.log(a);
// 30
// *Write a var variable named name with the value "John".
// var name= "John";
// *Create a var variable named price with the value 500.
// var price= "500";
// *Reassign price from 500 to 1000.
// var price= "500";
// price="1000";
// *What will be the output?
// *var x = 50;
//* x = 100;
// *console.log(x);
// 100
// *Can a var variable be reassigned?
// yes
// *Can a var variable be redeclared?
// yes
// *Write an example of var redeclaration.
// var name = "John";
// var name = "David";

// console.log(name);
// output:david
// *let
// *Create a let variable named age with the value 25.
// let age="25";
// *What will be the output?
// *let age = 20;
// *age = 30;
// *console.log(age);
// 30
// *Can a let variable be reassigned?
// yes
// *Can a let variable be redeclared?
// No, not in the same scope.
// *Find the error:
// *let name = "John";
// *let name = "David";
// The error is redeclaration of the same let variable.
// *Create a let variable called city and assign "Chennai".
// *Change the value of city to "Salem".
// let city = "Chennai";
// city = "Salem";
// *What will be the output?
// *let x = 10;
// *x = 50;
// *console.log(x);
// 50
// *Write a let variable called salary with the value 25000.
// *Reassign salary to 30000.
// let salary = 25000;
// salary = 30000;
// *const
// *Create a const variable called pi with the value 3.14.
// const pi = 3.14;
// *Can a const variable be reassigned?
// NO
// *Can a const variable be redeclared?
// NO
// *What is wrong with this code?
// *const age;
//* age = 25;
// const must be initialized when it is declared.
// const age = 25;
// *What happens here?
// *const price = 500;
// *price = 1000;
// It gives an error because a const variable cannot be reassigned.
// *Create a const variable called country with the value "India".
// const country = "India";
// *What will be the output?
// *const x = 100;
// *console.log(x);
// 100
// *Which keyword should you use if the value should not be reassigned?
// const
// *What is the difference between let and const?
// let	                                       const
// Can be reassigned	                    Cannot be reassigned
// Does not require immediate value	    Requires initialization
// Cannot be redeclared in same scope	    Cannot be redeclared
// *What is the difference between var and const?
// var	                                        const
// Can be reassigned	                      Cannot be reassigned
// Can be redeclared	                      Cannot be redeclared
// Does not require initialization	          Must be initialized
// Function scoped	                          Block scoped
// *Printing & Console
// *Write JavaScript code to print Hello World using console.log().
// console.log("Hello World");
// *Write JavaScript code to print the number 500 using console.log().
// console.log(500);
// *What is the purpose of console.warn()?
// console.warn("This is a warning");
// *What is the purpose of console.error()?
// console.error("Something went wrong");
//* What is the purpose of each?
// *alert()-Displays a popup message.
// *prompt()-Asks the user to enter information.
// *confirm()-Asks the user to confirm something with OK/Cancel.
// *document.writeln()-Writes content directly onto the webpage.
// *console.log()-Prints information in the browser's developer console.

//Create a variable for student name, age, and mark and print all three.
// let studentname = "Priyanka";
// let age = 26;
// let mark = 85;

// console.log(studentname);
// console.log(age);
// console.log(mark);

//Ask the user's name using prompt() and display it using alert().
// let name = prompt("Enter your name:");
// alert(name);
//Ask the user's age using prompt() and print it using console.log().
// let age = prompt("Enter your age:");
// console.log(age);
//Ask the user a question using confirm().
// let answer = confirm("Do you like javascript");
// console.log(answer);
//Ask the user's name and display it on the webpage using document.writeln().
// let name = prompt("Priyanka");
// document.writeln(name);

