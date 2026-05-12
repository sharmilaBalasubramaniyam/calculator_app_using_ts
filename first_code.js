"use strict";
// ===============================
// TYPESCRIPT BASICS FOR BEGINNERS
// ===============================
// ---------------------------------
// 1. VARIABLES
// ---------------------------------
let userName = "Sharmila";
let age = 21;
let isStudent = true;
console.log(userName);
console.log(age);
console.log(isStudent);
// ---------------------------------
// 2. BASIC DATA TYPES
// ---------------------------------
// string
let company = "OpenAI";
// number
let marks = 95;
// boolean
let passed = true;
console.log(company);
console.log(marks);
console.log(passed);
// ---------------------------------
// 3. ARRAY
// ---------------------------------
let numbers = [10, 20, 30];
console.log(numbers);
// ---------------------------------
// 4. STRING ARRAY
// ---------------------------------
let fruits = ["Apple", "Mango", "Orange"];
console.log(fruits);
// ---------------------------------
// 5. ANY TYPE
// ---------------------------------
let value = "Hello";
console.log(value);
value = 100;
console.log(value);
// ---------------------------------
// 6. FUNCTIONS
// ---------------------------------
function greet(name) {
    console.log("Hello " + name);
}
greet("Sharmila");
// ---------------------------------
// 7. FUNCTION WITH RETURN VALUE
// ---------------------------------
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);
// ---------------------------------
// 8. ARROW FUNCTION
// ---------------------------------
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 4));
// ---------------------------------
// 9. OBJECT
// ---------------------------------
let student = {
    name: "Ram",
    age: 22
};
console.log(student);
let emp = {
    id: 1,
    name: "Sam"
};
console.log(emp);
// ---------------------------------
// 11. CLASS
// ---------------------------------
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
let p1 = new Person("David");
p1.display();
// ---------------------------------
// 12. IF CONDITION
// ---------------------------------
let score = 80;
if (score >= 50) {
    console.log("Pass");
}
else {
    console.log("Fail");
}
// ---------------------------------
// 13. FOR LOOP
// ---------------------------------
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// ---------------------------------
// 14. WHILE LOOP
// ---------------------------------
let i = 1;
while (i <= 3) {
    console.log(i);
    i++;
}
// ---------------------------------
// 15. UNION TYPE
// ---------------------------------
let id;
id = 101;
console.log(id);
id = "EMP101";
console.log(id);
// ---------------------------------
// 16. TUPLE
// ---------------------------------
let person = ["John", 25];
console.log(person);
// ---------------------------------
// 17. ENUM
// ---------------------------------
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);
console.log(Color.Green);
let user1 = {
    name: "Sharmila",
    city: "Chennai"
};
console.log(user1);
// ---------------------------------
// 19. GENERICS
// ---------------------------------
function displayData(data) {
    return data;
}
console.log(displayData("Hello"));
console.log(displayData(100));
// ---------------------------------
// 20. DATE
// ---------------------------------
let today = new Date();
console.log(today);
// ===============================
// END OF TYPESCRIPT BASICS
// ===============================
