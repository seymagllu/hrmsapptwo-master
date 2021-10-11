import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ImageSingleResponse } from 'src/app/models/image/imageSingleResponse';
import { Image } from 'src/app/models/image/image';
import { CheckResponse } from 'src/app/models/shared/checkResponse';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl: string = "https://javareactcamp-hrms-backend.herokuapp.com/api/images"

  constructor(private httpClient: HttpClient) { }

  addImage(image: Image, userId: number):Observable<ImageSingleResponse>{
    return this.httpClient.post<ImageSingleResponse>(this.apiUrl + "/upload?userId=" + userId, image)
    .pipe(catchError(this.errorHandler));
  }

  deleteImage(id:number):Observable<CheckResponse>{
    return this.httpClient.delete<CheckResponse>(this.apiUrl + "/delete/byId?imgId=" + id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
