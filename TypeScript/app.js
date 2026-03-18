//  Basic Function
function greet(name) {
    return "Hello " + name;
}
//  Add Function
function add(a, b) {
    return a + b;
}
// Array
var numbers = [10, 20, 30];
numbers.forEach(function (num) { return console.log("Number:", num); });
var student1 = {
    name: "Omkar",
    age: 21,
    isPassed: true
};
console.log("Student:", student1);
//  Class
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hi I am " + this.name);
    };
    return Person;
}());
var p1 = new Person("Omkar");
p1.greet();
// Enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var myRole = Role.Admin;
console.log("Role:", myRole);
//  Generic
function identity(value) {
    return value;
}
console.log(identity(100));
console.log(identity("TypeScript"));
// Union Type
function printId(id) {
    console.log("ID:", id);
}
printId(101);
printId("A102");
// Final Output
console.log(greet("Omkar"));
console.log("Addition:", add(5, 10));
