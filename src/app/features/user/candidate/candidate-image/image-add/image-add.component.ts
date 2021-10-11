import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Image } from 'src/app/models/image/image';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { ImageService } from 'src/app/services/image/image.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent implements OnInit {

  @Input() candidate : Candidate
  @Output() addImageEvent = new EventEmitter<Image>();

  addImageForm: FormGroup
  imageUrl: string | ArrayBuffer;

  selectedFile: File;

  constructor(private formBuilder: FormBuilder,
    private imageService: ImageService,
    private toastrService: ToastrService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.createAddImageForm();
  }

  createAddImageForm(){
    this.addImageForm = this.formBuilder.group({
      multipartFile: ['', Validators.required]
    });
  }

  onFileChange(event){
    if (event.target.files.length > 0){
      this.selectedFile = event.target.files[0];
    }
  }

  uploadImage(){
    if (this.addImageForm.valid) {
      console.log(this.selectedFile);
      const formData:any = new FormData();
      formData.append('multipartFile', this.selectedFile);
      this.imageService.addImage(formData, this.candidate.id)
      .subscribe(res => {
                            this.toastrService.success("Fotoğraf Eklendi");
                            this.addImageEvent.emit(res.data);
                            this.updateProfileImage(res.data.id, this.candidate.id);
                          },
                  (err: HttpErrorResponse) => this.toastrService.error("hata")
                );
    }
  }

  updateProfileImage(imgId:number, userId:number){
    this.userService.updateProfileImage(imgId, userId).subscribe(res => console.log(res.data));
  }
}
