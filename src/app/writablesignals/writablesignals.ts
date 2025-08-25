import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-writablesignals',
  imports: [],
  templateUrl: './writablesignals.html',
  styleUrl: './writablesignals.css'
})
export class Writablesignals {
  count: WritableSignal<number> = signal(0);

  // Method to increment using update()
  increment() {
    this.count.update(value => value + 1);
  }

  // Method to reset using set()
  reset() {
    this.count.set(0);
  }
}
