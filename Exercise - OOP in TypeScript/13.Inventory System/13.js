var Product = /** @class */ (function () {
    function Product(name, price) {
        if (name.length < 1) {
            throw new Error("Product name must be at least 1 character long.");
        }
        if (price <= 0) {
            throw new Error("Product price must be greater than 0.");
        }
        Product._productCount++;
        this.id = Product._productCount;
        this._name = name;
        this._price = price;
    }
    Object.defineProperty(Product, "productCount", {
        get: function () {
            return Product._productCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getDetails = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this._name, ", Price: $").concat(this._price);
    };
    Product._productCount = 0;
    return Product;
}());
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.products = [];
    }
    Inventory.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Inventory.prototype.listProducts = function () {
        var details = this.products.map(function (p) { return p.getDetails(); }).join("\n");
        return "".concat(details, "\nTotal products created: ").concat(Product.productCount);
    };
    return Inventory;
}());
// Тест:
var inventory = new Inventory();
var product1 = new Product("Laptop", 1200);
var product2 = new Product("Phone", 800);
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());
