import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../interfaces/user.interface';

@Component({selector: 'login-component', templateUrl: './login.component.html'})
export class LoginComponent implements OnInit {
  private loginFormGroup    : FormGroup;
  private emailFormControl  : FormControl;
  private pwdFormControl    : FormControl;
  private emailErrorMessage : string;
  private pwdErrorMessage   : string;
  private disableButtonProp : boolean = true;

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

  // *ngIf="emailFormControl.errors.required">Email is required.
  // *ngIf="emailFormControl.errors.email && !emailFormControl.errors.required">Email is not valid.
  // validateEmailInput() {
  //   setTimeout(() => {
  //     if (this.pwdFormControl.errors.required) {
  //       this.emailErrorMessage = "Email is required.";
  //     }
  //     else if (this.pwdFormControl.errors.minlength) {
  //       this.emailErrorMessage = "Email is not valid.";
  //     }
  //   }, 100);
  // }

  validatePasswordInput() {
    setTimeout(() => {
 
      if (this.pwdFormControl.errors !== null) {
        if (this.pwdFormControl.errors.required) {
          this.pwdErrorMessage = "Password is required.";
        }
        else if (this.pwdFormControl.errors.minlength) {
          this.pwdErrorMessage = "Password must be 7 characters long.";
        }
      }
      
    }, 100);
  }

  disableSubmitButton() {
    setTimeout(() => {
      this.disableButtonProp = true;

      let email = this.emailFormControl.valid;
      let pwd   = this.pwdFormControl.valid;

      if (email && pwd) {
        this.disableButtonProp = false;
      }
    }, 100);
  }

  submitEmailAndPassword() {
    console.info("Email: ");
    console.info("Password: ");
  }

}
