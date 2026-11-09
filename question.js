let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 15000 }
];

let total = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log(total);

// Find the longest word
let sentence = "I love learning JavaScript programming";

let longest = sentence.split(" ").reduce((a, b) =>
    a.length > b.length ? a : b
);

console.log(longest);

// Find common elements between two arrays
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6, 7];

let common = a.filter(num => b.includes(num));

console.log(common);