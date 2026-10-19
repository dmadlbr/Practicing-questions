//Promise chaining
Promise.resolve(5)
    .then((num) => num * 2)
    .then((num) => num + 10)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => console.log(error));

//destructuring and spread
const user = {
    name: "Anu",
    age: 21,
    city: "Kochi"
};

const { name, ...details } = user;

console.log(name);
console.log(details);