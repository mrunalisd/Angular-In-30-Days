import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  imports: [FormsModule],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.css'
})
export class TemplateDriven {
   onSubmit(form: any) {
    console.log('Form Submitted!', form.value);
    alert('Form submitted successfully ✅');
  }
}
