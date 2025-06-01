class Product {
  private static _productCount: number = 0;
  public static get productCount(): number {
    return Product._productCount;
  }

  public readonly id: number;
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
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

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  getDetails(): string {
    return `ID: ${this.id}, Name: ${this._name}, Price: $${this._price}`;
  }
}

class Inventory {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  listProducts(): string {
    const details = this.products.map(p => p.getDetails()).join("\n");
    return `${details}\nTotal products created: ${Product.productCount}`;
  }
}

// Тест:
const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());
