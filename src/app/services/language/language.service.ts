import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LanguageListResponse } from 'src/app/models/language/languageListResponse';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  apiUrl:string = "https://javareactcamp-hrms-backend.herokuapp.com/api/languages"

  constructor(private httpClient: HttpClient) { }

  getAllLanguages():Observable<LanguageListResponse>{
    return this.httpClient.get<LanguageListResponse>(this.apiUrl + "/get/all")
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
