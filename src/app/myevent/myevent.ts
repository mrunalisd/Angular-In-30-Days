import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  imports: [FormsModule ],
  templateUrl: './myevent.html',
  styleUrl: './myevent.css'
})
export class Myevent {

   private _username: string = '';
  message: string = 'Interact with the page!';

  // Getter → formats the username before showing
  get username(): string {
    return this._username.toUpperCase(); // Example formatting
  }

  // Setter → cleans/validates input before saving
  set username(value: string) {
    this._username = value.trim(); // Example cleanup
  }

  onClick() {
    this.message = 'Button clicked!';
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message = `Typing: ${input.value}`;
  }

 onKeyEnter(event: Event) {
  const { key } = event as KeyboardEvent;
  if (key === 'Enter') {
    this.message = `Enter pressed → ${this._username}`;
  }}

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message = `Value changed: ${input.value}`;
  }

  onHover(enter: boolean) {
    this.message = enter ? 'Mouse entered!' : 'Mouse left!';
  }

  onFocus() {
    this.message = 'Input focused!';
  }

  onBlur() {
    this.message = 'Input blurred!';
  }

  logName(name: string) {
    this.message = `Template ref → ${name}`;
  }
}
