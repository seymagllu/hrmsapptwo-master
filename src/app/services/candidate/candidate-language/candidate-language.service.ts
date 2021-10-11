import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CandidateLanguage } from 'src/app/models/candidate-language/candidateLanguage';
import { CandidateLanguageListResponse } from 'src/app/models/candidate-language/candidateLanguageListResponse';
import { CandidateLanguageSingleResponse } from 'src/app/models/candidate-language/candidateLanguageSingleResponse';
import { CheckResponse } from 'src/app/models/shared/checkResponse';

@Injectable({
  providedIn: 'root'
})
export class CandidateLanguageService {

  apiUrl:string = "https://javareactcamp-hrms-backend.herokuapp.com/api/candidateLanguages"

  constructor(private httpClient: HttpClient) { }

  getAllCandidateLanguages():Observable<CandidateLanguageListResponse>{
    return this.httpClient.get<CandidateLanguageListResponse>(this.apiUrl + "/get/all")
    .pipe(catchError(this.errorHandler));
  }

  addCandidateLanguage(candidateLanguage: CandidateLanguage):Observable<CandidateLanguageSingleResponse>{
    return this.httpClient.post<CandidateLanguageSingleResponse>(this.apiUrl + "/add", candidateLanguage)
    .pipe(catchError(this.errorHandler));
  }

  deleteLanguage(id:number):Observable<CheckResponse>{
    return this.httpClient.delete<CheckResponse>(this.apiUrl + "/delete/byId?CandLangId=" + id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

}
