
// ===============================
// TYPESCRIPT BASICS FOR BEGINNERS
// ===============================


// ---------------------------------
// 1. VARIABLES
// ---------------------------------

let userName: string = "Sharmila";
let age: number = 21;
let isStudent: boolean = true;

console.log(userName);
console.log(age);
console.log(isStudent);


// ---------------------------------
// 2. BASIC DATA TYPES
// ---------------------------------

// string
let company: string = "OpenAI";

// number
let marks: number = 95;

// boolean
let passed: boolean = true;

console.log(company);
console.log(marks);
console.log(passed);


// ---------------------------------
// 3. ARRAY
// ---------------------------------

let numbers: number[] = [10, 20, 30];

console.log(numbers);


// ---------------------------------
// 4. STRING ARRAY
// ---------------------------------

let fruits: string[] = ["Apple", "Mango", "Orange"];

console.log(fruits);


// ---------------------------------
// 5. ANY TYPE
// ---------------------------------

let value: any = "Hello";

console.log(value);

value = 100;

console.log(value);


// ---------------------------------
// 6. FUNCTIONS
// ---------------------------------

function greet(name: string): void {
    console.log("Hello " + name);
}

greet("Sharmila");


// ---------------------------------
// 7. FUNCTION WITH RETURN VALUE
// ---------------------------------

function add(a: number, b: number): number {
    return a + b;
}

let result = add(10, 20);

console.log(result);


// ---------------------------------
// 8. ARROW FUNCTION
// ---------------------------------

const multiply = (a: number, b: number): number => {
    return a * b;
};

console.log(multiply(5, 4));


// ---------------------------------
// 9. OBJECT
// ---------------------------------

let student: {
    name: string;
    age: number;
} = {
    name: "Ram",
    age: 22
};

console.log(student);


// ---------------------------------
// 10. INTERFACE
// ---------------------------------

interface Employee {
    id: number;
    name: string;
}

let emp: Employee = {
    id: 1,
    name: "Sam"
};

console.log(emp);


// ---------------------------------
// 11. CLASS
// ---------------------------------

class Person {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log(this.name);
    }
}

let p1 = new Person("David");

p1.display();


// ---------------------------------
// 12. IF CONDITION
// ---------------------------------

let score: number = 80;

if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// ---------------------------------
// 13. FOR LOOP
// ---------------------------------

for (let i: number = 1; i <= 5; i++) {
    console.log(i);
}


// ---------------------------------
// 14. WHILE LOOP
// ---------------------------------

let i: number = 1;

while (i <= 3) {
    console.log(i);
    i++;
}


// ---------------------------------
// 15. UNION TYPE
// ---------------------------------

let id: string | number;

id = 101;
console.log(id);

id = "EMP101";
console.log(id);


// ---------------------------------
// 16. TUPLE
// ---------------------------------

let person: [string, number] = ["John", 25];

console.log(person);


// ---------------------------------
// 17. ENUM
// ---------------------------------

enum Color {
    Red,
    Green,
    Blue
}

console.log(Color.Red);
console.log(Color.Green);


// ---------------------------------
// 18. TYPE ALIAS
// ---------------------------------

type User = {
    name: string;
    city: string;
};

let user1: User = {
    name: "Sharmila",
    city: "Chennai"
};

console.log(user1);


// ---------------------------------
// 19. GENERICS
// ---------------------------------

function displayData<T>(data: T): T {
    return data;
}

console.log(displayData<string>("Hello"));
console.log(displayData<number>(100));


// ---------------------------------
// 20. DATE
// ---------------------------------

let today: Date = new Date();

console.log(today);


// ===============================
// END OF TYPESCRIPT BASICS
// ===============================