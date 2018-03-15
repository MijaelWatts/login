import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../interfaces/user.interface';

@Component({
	selector: 'login-component',
	templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  private loginForm : FormGroup;
  private email     : FormControl;
  private password  : FormControl;

	private inputCss: String = '';

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(3)
    ]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(7)
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email    : this.email,
      password : this.password
    });
  }

	showErrors() {
		console.log(this.email.errors);
	}

}
