// Set

const fruits = new Set();

fruits.add("Apple");
fruits.add("Mango");
fruits.add("Apple");
fruits.add("Orange");

console.log(fruits);

console.log("Size:", fruits.size);

console.log("Has Mango:", fruits.has("Mango"));

console.log("Delete Orange:", fruits.delete("Orange"));

console.log(fruits);


// for...of loop

const numbers = [10, 20, 30, 40];

for (const number of numbers) {
    console.log(number);
}


// for...in loop

const student = {
    name: "Dheema",
    age: 22,
    course: "JavaScript"
};

for (const key in student) {
    console.log(key);
}

for (const key in student) {
    console.log(key + ":", student[key]);
}


// Map

const students = new Map();

students.set("name", "Dheema");
students.set("age", 22);
students.set("course", "JavaScript");

console.log(students);

console.log("Size:", students.size);

console.log("Name:", students.get("name"));

console.log("Has age:", students.has("age"));

students.delete("age");

console.log(students);


// Map loops

for (const [key, value] of students) {
    console.log(key + " => " + value);
}