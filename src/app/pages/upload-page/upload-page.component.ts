import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.local.scss']
})
export class UploadPageComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) { }
   uploadForm: FormGroup;

   ngOnInit(): void {
    this.uploadForm = this._formBuilder.group({
      name: ['']
    });
  }

   submitForm():void {
    console.log(this.uploadForm.value);
  }
}
