import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-styling',
  imports: [CommonModule],
  templateUrl: './dynamic-styling.html',
  styleUrl: './dynamic-styling.css'
})
export class DynamicStyling {
   isActive = true;
  isError = false;
  fontSize = 20;

  toggleState() {
    this.isActive = !this.isActive;
    this.isError = !this.isError;
    this.fontSize = this.fontSize === 20 ? 28 : 20;
  }
}
