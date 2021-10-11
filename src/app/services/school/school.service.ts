import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SchoolListResponse } from 'src/app/models/school/schoolListResponse';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  
  apiUrl: string = "https://javareactcamp-hrms-backend.herokuapp.com/api/schools"

  constructor(private httpClient: HttpClient) { }

  getAllSchools():Observable<SchoolListResponse>{
    return this.httpClient.get<SchoolListResponse>(this.apiUrl + "/get/all")
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

}
