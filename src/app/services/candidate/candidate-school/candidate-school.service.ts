import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CandidateSchool } from 'src/app/models/candidate-school/candidateSchool';
import { CandidateSchoolListResponse } from 'src/app/models/candidate-school/candidateSchoolListResponse';
import { CandidateSchoolSingleResponse } from 'src/app/models/candidate-school/candidateSchoolSingleResponse';
import { SchoolSingleResponse } from 'src/app/models/school/schoolSingleResponse';
import { CheckResponse } from 'src/app/models/shared/checkResponse';

@Injectable({
  providedIn: 'root'
})
export class CandidateSchoolService {

  apiUrl: String = "https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSchools"

  constructor(private httpClient: HttpClient) { }

  addCandidateSchool(candidateSchool: CandidateSchool):Observable<SchoolSingleResponse>{
    return this.httpClient.post<SchoolSingleResponse>(this.apiUrl + "/add", candidateSchool)
    .pipe(catchError(this.errorHandler));
  }

  deleteById(id:number):Observable<CheckResponse>{
    return this.httpClient.delete<CheckResponse>(this.apiUrl + "/delete/byId?candSchId=" + id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

}
