import { Component, signal, computed, WritableSignal, Signal } from '@angular/core';

@Component({
  selector: 'app-computedsignals',
  imports: [],
  templateUrl: './computedsignals.html',
  styleUrl: './computedsignals.css'
})
export class Computedsignals {
  count: WritableSignal<number> = signal(0);

  // Computed signal (read-only)
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  increment() {
    this.count.update(value => value + 1);
  }
}
