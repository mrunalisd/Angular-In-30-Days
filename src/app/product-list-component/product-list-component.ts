import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSevice } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Product List</h3>
    <ul>
      <li *ngFor="let product of products">
        {{ product.name }} - {{ product.price | currency:'INR' }}
      </li>
    </ul>
  `
})
export class ProductListComponent {
  products: any[] = [];

  constructor(private productService: ProductSevice) {
    this.products = this.productService.getProducts();
  }
}
