import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

let initialEmailValue = '';
const savedForm = window.localStorage.getItem('saved-login-form');

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl(initialEmailValue, {
      validators: [Validators.email, Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.required]
    }),
    remember: new FormControl(false)
  });


  get emailIsInvalid() {
    return this.form.controls.email.touched &&
    this.form.controls.email.dirty &&
    this.form.controls.email.invalid;
  }

  get passwordIsInvalid() {
    return this.form.controls.password.touched &&
    this.form.controls.password.dirty &&
    this.form.controls.password.invalid;
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('INVALID FORM');
      return;
    }
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
    const enteredRemember = this.form.value.remember;

    console.log(enteredEmail, enteredPassword, enteredRemember);

  }
}

