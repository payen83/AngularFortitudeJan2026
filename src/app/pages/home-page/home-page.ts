import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [ReactiveFormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit {
  public calculateForm: any = FormGroup;
  public result: number = 0;
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.calculateForm = this.formBuilder.group({
      textField1: [''],
      textField2: ['']
    });
  }

  onAdd(){
    console.log('test');
    let formData = this.calculateForm.value;
    console.log('value',formData.textField1);
    this.result = Number(formData.textField1) + Number(formData.textField2);
  }

  onSubtract(){
    console.log('test');
    let formData = this.calculateForm.value;
    console.log('value',formData.textField1);
    this.result = formData.textField1 - formData.textField2;
  }

}
