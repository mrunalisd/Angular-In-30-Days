import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductSevice {
  products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Tablet', price: 30000 }
  ];

  getProducts() {
    return this.products;
  }
}
