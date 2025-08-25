import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  count: number = 0;

  // Increment function
  increment() {
    this.count++;
  }

  // Decrement function
  decrement(): void {
    this.count--;
  }

  // Reset function
  reset(): void {
    this.count = 0;
  }
}
