function formatString(input: string, toUpper?: boolean): string {
    if (!toUpper) {
        return input.toLocaleLowerCase();
    }
    return input.toUpperCase();
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating > 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

class Vechicle {
    constructor(private make: string, private year: number) { }
    getInfo(): void {
        return console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}

class Car extends Vechicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel(): void {
        return console.log(`Model: ${this.model}`)
    }
}

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else if (typeof value === "number") {
        return value * 2;
    }
    else {
        throw new Error("Invalid type");
    }
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }

    let mostExpensiveProduct = products[0];

    for (let i = 1; i < products.length; i++) {
        if (products[i].price > mostExpensiveProduct.price) {
            mostExpensiveProduct = products[i];
        }
    }

    return mostExpensiveProduct;
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            } else {
                resolve(n * n);
            }
        }, 1000);
    });
}

