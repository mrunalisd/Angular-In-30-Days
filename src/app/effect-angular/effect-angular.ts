import { Component, effect,signal } from '@angular/core';

@Component({
  selector: 'app-effect-angular',
  imports: [],
  templateUrl: './effect-angular.html',
  styleUrl: './effect-angular.css'
})
export class EffectAngular {
     counter = signal(0);

  constructor() {
    // Effect 1: Log whenever counter changes
    effect(() => {
      console.log(`Counter changed to: ${this.counter()}`);
    });

    // Effect 2: Sync counter value with localStorage
    effect(() => {
      localStorage.setItem('counterValue', this.counter().toString());
    });

    // Effect 3: Custom DOM behavior (just to show effect usage)
    effect(() => {
      const el = document.getElementById('counter-box');
      if (el) {
        el.style.backgroundColor = this.counter() % 2 === 0 ? 'lightgreen' : 'lightcoral';
      }
    });
  }

  // Method to increment counter
  increment() {
    this.counter.update(value => value + 1);
  }

  // Method to decrement counter
  decrement() {
    this.counter.update(value => value - 1);
  }

  // Method to reset counter
  reset() {
    this.counter.set(0);
  }
}
