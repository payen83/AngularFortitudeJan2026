import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  imports: [...SharedModules, ReactiveFormsModule],
  templateUrl: './add.html',
  styleUrl: './add.scss',
})
export class Add {
  public todoForm: any = FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<Add>
  ){
    this.todoForm = this.formBuilder.group({
      title: ''
    });
  }

  onSubmit(){
    let formData = this.todoForm.value;
    let title = formData.title;
    if(title != '') this.dialogRef.close(title);
  }

  onCancel(){
    this.dialogRef.close();
  }

}
