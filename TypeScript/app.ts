//  Basic Function
function greet(name: string): string {
    return "Hello " + name;
}

//  Add Function
function add(a: number, b: number): number {
    return a + b;
}

// Array
let numbers: number[] = [10, 20, 30];
numbers.forEach((num) => console.log("Number:", num));

//  Interface
interface Student {
    name: string;
    age: number;
    isPassed: boolean;
}

let student1: Student = {
    name: "Omkar",
    age: 21,
    isPassed: true
};

console.log("Student:", student1);

//  Class
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log("Hi I am " + this.name);
    }
}

let p1 = new Person("Omkar");
p1.greet();

// Enum
enum Role {
    Admin,
    User,
    Guest
}

let myRole: Role = Role.Admin;
console.log("Role:", myRole);

//  Generic
function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(100));
console.log(identity<string>("TypeScript"));

// Union Type
function printId(id: number | string) {
    console.log("ID:", id);
}

printId(101);
printId("A102");



// Final Output
console.log(greet("Omkar"));
console.log("Addition:", add(5, 10));