import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css',
  providers : [HttpClient]
})
export class ImageUploadComponent {
  constructor(private http : HttpClient){}
  uploadImage(event:any){
    const file = event.currentTarget.files[0]
    const formObj = new FormData();
    formObj.append('image',file)
     this.http.post('http://localhost:3000/image/fileSystem/staff/103', formObj).subscribe((res : any) => {
        debugger;
     })
  }
}
