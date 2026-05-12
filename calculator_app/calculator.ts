// ==========================
// SCIENTIFIC CALCULATOR
// ==========================


// ----------------------------------
// BASIC OPERATIONS
// ----------------------------------

// Addition
function add(a: number, b: number): number {
    return a + b;
}

// Subtraction
function subtract(a: number, b: number): number {
    return a - b;
}

// Multiplication
function multiply(a: number, b: number): number {
    return a * b;
}

// Division
function divide(a: number, b: number): number {
    return a / b;
}


// ----------------------------------
// SCIENTIFIC OPERATIONS
// ----------------------------------

// Power
function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}

// Square Root
function squareRoot(num: number): number {
    return Math.sqrt(num);
}

// Absolute Value
function absolute(num: number): number {
    return Math.abs(num);
}

// Sin
function sine(angle: number): number {
    return Math.sin(angle);
}

// Cos
function cosine(angle: number): number {
    return Math.cos(angle);
}

// Tan
function tangent(angle: number): number {
    return Math.tan(angle);
}

// Logarithm
function logarithm(num: number): number {
    return Math.log(num);
}

// Random Number
function randomNumber(): number {
    return Math.random();
}


// ----------------------------------
// VARIABLES
// ----------------------------------

let num1: number = 10;
let num2: number = 5;


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