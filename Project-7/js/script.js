// 1. Create a school class and create a student and faculty method. The student mehod gives the student name, email and contact number as argument and print all details the same as fauculty using class & object.

class School {

    Student(name, email, contact) {
        this.name = name;
        this.email = email;
        this.contact = contact;
        console.log("Student Details");
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Contact: ${this.contact}`);
    }

    Faculty(name, email, contact) {
        this.name = name;
        this.email = email;
        this.contact = contact;
        console.log("Faculty Details");
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Contact: ${this.contact}`);
    }
}

let person = new School();
person.Student("Jay", "jay123@gmail.com", "1236547890");
person.Faculty("Girish-Sir", "girish123@gmail.com", "9389603147");

// EXPECTED OUTPUT:

// Student Details
// Name: Jay
// Email: jay123@gmail.com
// Contact: 1236547890
// Faculty Details
// Name: Girish-Sir
// Email: girish123@gmail.com
// Contact: 9389603147

// 2. Criate a person class with an argument name and age. creat an Employes class through print out detail of personal class.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    Details() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Worker extends Person {
    constructor(name, age, employeeId) {
        super(name, age);
        this.employeeId = employeeId;
    }

    printDetails() {
        console.log(this.Details());
        console.log(`Employee ID: ${this.employeeId}`);
    }
}

let worker = new Worker("Jay", 22, "9129");
worker.printDetails();

// EXPECTED OUTPUT:
// Name: Jay, Age: 22
// Employee ID: 9129

// 3. Employee Class creates a conttructor called print a simple message.

class Employee {
    constructor() {
        console.log("An Employee has been created.");
    }
}

let employeeData = new Employee();

// EXPECTED OUTPUT:
// An Employee has been created.

// 4. Create a shape class and create a rectangle and circle method find circle area (3.14 * r * r) and rectangle area (width * height) using with argument.

class Shape {
    area() {
        console.log("Area calculation not defined.");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return 3.14 * this.radius * this.radius;
    }
}

let rectangle = new Rectangle(16, 29);
console.log(`Rectangle Area: ${rectangle.area()}`);

let circle = new Circle(7);
console.log(`Circle Area: ${circle.area()}`);

// EXPECTED OUTPUT:

// Rectangle Area: 464
// Circle Area: 153.86
