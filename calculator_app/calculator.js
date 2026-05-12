"use strict";
// ==========================
// SCIENTIFIC CALCULATOR
// ==========================
// ----------------------------------
// BASIC OPERATIONS
// ----------------------------------
// Addition
function add(a, b) {
    return a + b;
}
// Subtraction
function subtract(a, b) {
    return a - b;
}
// Multiplication
function multiply(a, b) {
    return a * b;
}
// Division
function divide(a, b) {
    return a / b;
}
// ----------------------------------
// SCIENTIFIC OPERATIONS
// ----------------------------------
// Power
function power(base, exponent) {
    return Math.pow(base, exponent);
}
// Square Root
function squareRoot(num) {
    return Math.sqrt(num);
}
// Absolute Value
function absolute(num) {
    return Math.abs(num);
}
// Sin
function sine(angle) {
    return Math.sin(angle);
}
// Cos
function cosine(angle) {
    return Math.cos(angle);
}
// Tan
function tangent(angle) {
    return Math.tan(angle);
}
// Logarithm
function logarithm(num) {
    return Math.log(num);
}
// Random Number
function randomNumber() {
    return Math.random();
}
// ----------------------------------
// VARIABLES
// ----------------------------------
let num1 = 10;
let num2 = 5;
// ----------------------------------
// BASIC OUTPUTS
// ----------------------------------
console.log("Addition:", add(num1, num2));
console.log("Subtraction:", subtract(num1, num2));
console.log("Multiplication:", multiply(num1, num2));
console.log("Division:", divide(num1, num2));
// ----------------------------------
// SCIENTIFIC OUTPUTS
// ----------------------------------
console.log("Power:", power(2, 3));
console.log("Square Root:", squareRoot(25));
console.log("Absolute:", absolute(-100));
console.log("Sin:", sine(1));
console.log("Cos:", cosine(1));
console.log("Tan:", tangent(1));
console.log("Log:", logarithm(10));
console.log("Random Number:", randomNumber());
