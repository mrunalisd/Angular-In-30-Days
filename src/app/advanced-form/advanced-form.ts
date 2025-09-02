import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advanced-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './advanced-form.html',
  styleUrls: ['./advanced-form.css']
})
export class AdvancedForm{
  userForm: FormGroup;
  user: any = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      this.user = this.userForm.value;
      this.userForm.reset();
    }
  }

  get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
}
