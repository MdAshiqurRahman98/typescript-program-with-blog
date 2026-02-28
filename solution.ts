type FormatInput = string | number | boolean;

function formatValue(value: FormatInput): string | number | boolean {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }

  if (typeof value === 'number') {
    return value * 10;
  }

  return !value;
}

function getLength(value: string | unknown[]): number {
  if (typeof value === 'string') {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type RatedItem = {
  title: string;
  rating: number;
};

function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter(item => item.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  const availability = book.isAvailable ? 'Yes' : 'No';
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}

function getUniqueValues<T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] {
  const result: T[] = [];

  function exists(value: T): boolean {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!exists(arr1[i])) {
      result[result.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!exists(arr2[i])) {
      result[result.length] = arr2[i];
    }
  }

  return result;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map(product => {
      const base = product.price * product.quantity;
      const discount = product.discount ?? 0;
      const finalPrice = base - (base * discount) / 100;
      return finalPrice;
    })
    .reduce((total, price) => total + price, 0);
}