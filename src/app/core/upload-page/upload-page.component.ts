import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.local.scss']
})
export class UploadPageComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  public uploadForm: FormGroup;

  public ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      name: ['']
    });
  }

  public submitForm():void {
    console.log(this.uploadForm.value);
  }

}
