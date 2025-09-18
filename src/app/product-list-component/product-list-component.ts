import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSevice } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Products from API</h3>
    <ul>
     <li *ngFor="let product of products">
  {{ product.title }} - {{ product.price | currency:'USD' }}
</li>
    </ul>
  `
})
export class ProductListComponent {
  products: any[] = [];

  constructor(private productService: ProductSevice) {}
    ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
       console.log('API Data:', data);
    });
  }
}
