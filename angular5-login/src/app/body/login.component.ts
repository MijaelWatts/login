import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../interfaces/user.interface';

@Component({
	selector: 'login-component',
	templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  ngOnInit() { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

}