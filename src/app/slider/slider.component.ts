import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  selectForm: FormGroup;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private fb: FormBuilder) {
    this.selectForm = this.fb.group({
      selectCity: ['', Validators.required]
  });
   }

   selectt(){
    console.log('form', this.selectForm.value);
  
  }

  ngOnInit(): void {
  }
  
}
