//sorting
const products = [
    { name: "Mouse", price: 500 },
    { name: "Laptop", price: 50000 },
    { name: "Keyboard", price: 1500 }
];

products.sort((a, b) => a.price - b.price);

products.forEach(product => {
    console.log(product.name, product.price);
});

// find and findIndex
const prices = [100, 250, 400, 600];

const result = prices.find(price => price > 300);
const index = prices.findIndex(price => price > 300);

console.log("Price:", result);
console.log("Index:", index);

//grouping by cats
const productsList = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Mobile", category: "Electronics" },
    { name: "Jeans", category: "Clothing" }
];

const grouped = productsList.reduce((result, product) => {
    if (!result[product.category]) {
        result[product.category] = [];
    }

    result[product.category].push(product.name);

    return result;
}, {});

console.log(grouped);

