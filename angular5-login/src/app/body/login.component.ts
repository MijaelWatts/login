import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../interfaces/user.interface';

@Component({
	selector: 'login-component',
	templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  email     : FormControl;
  password  : FormControl;


  ngOnInit() { 
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
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

}