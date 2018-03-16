import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../interfaces/user.interface';

@Component({selector: 'login-component', templateUrl: './login.component.html'})
export class LoginComponent implements OnInit {
  private loginFormGroup   : FormGroup;
  private emailFormControl : FormControl;
  private pwdFormControl   : FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    this.pwdFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(7)
    ]);
  }

  createForm() {
    this.loginFormGroup = new FormGroup({
      emailFormControl : this.emailFormControl,
      pwdFormControl   : this.pwdFormControl
    });
  }

  submitEmailAndPassword() {
    console.info("Email: ");
    console.info("Password: ");
  }

}
