import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SkillListResponse } from 'src/app/models/skill/skillListResponse';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  apiUrl:string = "https://javareactcamp-hrms-backend.herokuapp.com/api/skills";

  constructor(private httpClient: HttpClient) { }

  getAllSkills():Observable<SkillListResponse>{
    return this.httpClient.get<SkillListResponse>(this.apiUrl + "/get/all")
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
