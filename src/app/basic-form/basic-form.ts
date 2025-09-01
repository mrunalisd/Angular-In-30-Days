import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  imports: [FormsModule],
  templateUrl: './basic-form.html',
  styleUrl: './basic-form.css'
})
export class BasicForm {
user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit(formData: any) {
    console.log('Form Submitted!', formData);
    alert(`Hello ${this.user.name}, your form is submitted!`);
  }
}
