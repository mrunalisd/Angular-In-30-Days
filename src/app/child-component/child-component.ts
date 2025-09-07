import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css'
})
export class ChildComponent {
    @Output() userEvent = new EventEmitter<string>();

  sendData() {
    this.userEvent.emit('Hello from Child Component ');
  }

}
