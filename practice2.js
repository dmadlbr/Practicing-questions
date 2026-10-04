//constructor with method
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;

    this.showProduct = function() {
        console.log(this.name + " - ₹" + this.price);
    };
}

const product1 = new Product("Laptop", 50000, 10);
const product2 = new Product("Mouse", 1000, 25);

product1.showProduct();
product2.showProduct();

//with stock check
function Product2(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;

    this.checkStock = function() {
        if (this.stock == 0) {
            console.log(this.name + " is out of stock");
        } else if (this.stock < 10) {
            console.log(this.name + " is low stock");
        } else {
            console.log(this.name + " is in stock");
        }
    };
}

const laptop = new Product2("Laptop", 50000, 20);
const phone = new Product2("Phone", 25000, 5);
const tablet = new Product2("Tablet", 30000, 0);

laptop.checkStock();
phone.checkStock();
tablet.checkStock();