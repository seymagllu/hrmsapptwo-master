import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Image } from 'src/app/models/image/image';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  @Input() candidate: Candidate;
  @Output() deleteImageEvent = new EventEmitter<number>();
  candidateImages : Image[];

  constructor(private imageService: ImageService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.candidateImages = this.candidate.images;
  }

  deleteImage(id:number){
    this.imageService.deleteImage(id)
      .subscribe(res => {
                  this.toastrService.success("Fotoğraf Silindi...");
                  this.deleteImageEvent.emit(id);
                },
                (err: HttpErrorResponse) => this.toastrService.error(err.error.data.errors["uk"])
              );
  }

}
