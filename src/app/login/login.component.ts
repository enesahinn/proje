import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginService : LoginService,
    private fb: FormBuilder) {
    this.loginForm = this.fb.group({
        mail: ['', Validators.required],
        password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  login(){
    console.log('form', this.loginForm.value);
    
    const user = this.loginForm.value;

    this.loginService.createTask(user)  
    .subscribe( (res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

}
