import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-flowcontrol',
  imports: [CommonModule, FormsModule],
  templateUrl: './flowcontrol.html',
  styleUrl: './flowcontrol.css'
})
export class Flowcontrol {
  marks = 0;
  day = 0;
}
