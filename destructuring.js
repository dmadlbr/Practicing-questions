const student = { name: "Dheema", age: 20, course: "JavaScript" }; 
const { name, age, course } = student; 
console.log(name);
console.log(age); 
console.log(course);


//array
const colors = ["Red", "Green", "Blue"];
const [one, two, three] = colors; 
console.log(one);
console.log(two); 
console.log(three);


//
const student2 = { name: "Dheema", age: 20 }; 
const { name: studentName, age: studentAge } = student2; 
console.log(studentName); 
console.log(studentAge);

//
const numbers = [10, 20, 30, 40]; 
const [first, , third] = numbers; 
console.log(first); 
console.log(third);

//
const student3 = { name: "Dheema", marks: { maths: 90, science: 85 } }; 
const { marks: { maths, science } } = student3; 
console.log(maths); 
console.log(science);