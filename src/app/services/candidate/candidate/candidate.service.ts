import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CheckResponse } from 'src/app/models/shared/checkResponse';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateListResponse } from 'src/app/models/user/candidate/candidateListResponse';
import { CandidateSingleResponse } from 'src/app/models/user/candidate/candidateSingleResponse';

@Injectable({
  providedIn: 'root'
})

export class CandidateService {

  apiUrl : string = "https://javareactcamp-hrms-backend.herokuapp.com/api/candidates";
  constructor(private httpClient : HttpClient) { }

  getAllCandidates():Observable<CandidateListResponse>{
    return this.httpClient.get<CandidateListResponse>( this.apiUrl + "/get/all")
    .pipe(catchError(this.errorHandler));
  }

  getCandidateById(id:number):Observable<CandidateSingleResponse>{
    return this.httpClient.get<CandidateSingleResponse>(this.apiUrl + "/get/byId?candId=" + id)
    .pipe(catchError(this.errorHandler));
  }

  checkByNationalityId(nationalityId: string):Observable<CheckResponse>{
    return this.httpClient.get<CheckResponse>(this.apiUrl + "/exists/byNatId?nationalityId=" + nationalityId)
    .pipe(catchError(this.errorHandler));
  }

  addCandidate(candidate: Candidate):Observable<CandidateSingleResponse>{
    return this.httpClient.post<CandidateSingleResponse>(this.apiUrl + "/add", candidate)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

  addGithubLink(id:number, githubLink: string):Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + "/update/githubAccount?candId="+ id +"&githubAccount=" + githubLink, githubLink);
  }

  addLinkedinLink(id:number, linkedinLink: string):Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + "/update/linkedinAccount?candId="+ id +"&linkedinAccount=" + linkedinLink, linkedinLink)
  }

  addToFavourites(candId: number, advId: number):Observable<CandidateSingleResponse>{
    return this.httpClient.put<CandidateSingleResponse>(this.apiUrl + "/update/favoriteJobAdvs/add?candId="+ candId +"&jobAdvId=" + advId, {candId, advId})
    .pipe(catchError(this.errorHandler));
  }

  removeFromFavourites(candId: number, advId: number):Observable<CandidateSingleResponse>{
    return this.httpClient.put<CandidateSingleResponse>(this.apiUrl + "/update/favoriteJobAdvs/remove?candId="+ candId +"&jobAdvId=" + advId, {candId, advId})
    .pipe(catchError(this.errorHandler));
  }


}
