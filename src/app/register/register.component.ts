import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private registerService : RegisterService,
    private fb: FormBuilder) {
    this.registerForm = this.fb.group({
        email: ['', Validators.required],
        name: ['', Validators.required],
        surname: ['', Validators.required],
        identityNumber: ['', Validators.required],
        birthDate: ['', Validators.required],
        password: ['', Validators.required],
        phone: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  register(){
    console.log('form', this.registerForm.value);

    const user = this.registerForm.value;
    this.registerService.createUser(user)
    .subscribe( (res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

}
