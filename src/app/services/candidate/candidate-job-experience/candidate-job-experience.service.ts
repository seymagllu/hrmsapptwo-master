import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JobExperience } from 'src/app/models/job-experience/jobExperience';
import { JobExperienceListResponse } from 'src/app/models/job-experience/jobExperienceListResponse';
import { jobExperienceSingleResponse } from 'src/app/models/job-experience/jobExperienceSingleResponse';


@Injectable({
  providedIn: 'root'
})
export class CandidateJobExperienceService {

  apiUrl:string = "https://javareactcamp-hrms-backend.herokuapp.com/api/candidateJobExperiences";

  constructor(private httpClient: HttpClient) { }

  getAllJobExperiences():Observable<JobExperienceListResponse>{
    return this.httpClient.get<JobExperienceListResponse>(this.apiUrl + "/get/all")
    .pipe(catchError(this.errorHandler));
  }

  addJobExperience(jobExperience: JobExperience):Observable<jobExperienceSingleResponse>{
    return this.httpClient.post<jobExperienceSingleResponse>(this.apiUrl + "/add", jobExperience)
    .pipe(catchError(this.errorHandler));
  }

  deleteById(id:number):Observable<jobExperienceSingleResponse>{
    return this.httpClient.delete<jobExperienceSingleResponse>(this.apiUrl + "/delete/byId?candJobExpId=" + id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
