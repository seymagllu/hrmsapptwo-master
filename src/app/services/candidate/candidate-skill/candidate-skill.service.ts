import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CandidateSkill } from 'src/app/models/candidate-skill/candidateSkill';
import { CheckResponse } from 'src/app/models/shared/checkResponse';
import { SkillSingleResponse } from 'src/app/models/skill/skillSingleResponse';

@Injectable({
  providedIn: 'root'
})
export class CandidateSkillService {

  apiUrl:string = "https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSkills";

  constructor(private httpClient: HttpClient) { }

  addCandidateSkill(candidateSkill: CandidateSkill):Observable<SkillSingleResponse>{
    return this.httpClient.post<SkillSingleResponse>(this.apiUrl + "/add", candidateSkill )
      .pipe(catchError(this.errorHandler));
  }

  deleteSkill(id:number):Observable<CheckResponse>{
    return this.httpClient.delete<CheckResponse>(this.apiUrl + "/delete/byId?candSkillId=" + id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
