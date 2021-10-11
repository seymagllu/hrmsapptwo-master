import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CandidateCv } from 'src/app/models/cv/candidateCv';
import { Cv } from 'src/app/models/cv/cv';
import { CvSingleResponse } from 'src/app/models/cv/cvSingleResponse';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  apiUrl:string = "https://javareactcamp-hrms-backend.herokuapp.com/api/cvs";

  constructor(private httpClient: HttpClient) { }

  addCv(cv: Cv):Observable<any>{
    return this.httpClient.post<any>(this.apiUrl + "/add", cv)
    .pipe(catchError(this.errorHandler));
  }

  getCvById(id: number):Observable<CvSingleResponse>{
    return this.httpClient.get<CvSingleResponse>(this.apiUrl + "/get/byId?cvId=" + id)
    .pipe(catchError(this.errorHandler));
  }

  updateJobExperiences(jobExpIds:number[], cvId: number):Observable<any>{
    let str : string = "";

    jobExpIds.map(id => str += "candJobExpIds="+id + "&");
    return this.httpClient.put<any>(this.apiUrl + "/update/jobExps/add?" + str + "cvId=" + cvId, {jobExpIds, cvId} )
      .pipe(catchError(this.errorHandler));
  }

  removeJobExperience(jobExpId: number, cvId: number):Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + "/update/jobExps/remove?" + "candJobExpIds= " + jobExpId + "&cvId=" + cvId, {jobExpId, cvId})
    .pipe(catchError(this.errorHandler));
  }

  updateSchools(schoolIds: number[], cvId: number):Observable<any>{
    let str : string = "";
    schoolIds.map(id => str += "candSchoolIds=" + id + "&");

    return this.httpClient.put<any>(this.apiUrl + "/update/schools/add?" + str + "cvId=" + cvId, {schoolIds, cvId})
    .pipe(catchError(this.errorHandler));
  }

  removeSchool(schoolId: number, cvId:number):Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + "/update/schools/remove?candSchoolIds=" + schoolId +"&cvId=" + cvId, {schoolId, cvId})
    .pipe(catchError(this.errorHandler));
  }

  updateLanguages(languageIds: number[], cvId:number):Observable<any>{
    let str : string = "";
    languageIds.map(id => str += "candLangIds=" + id + "&");

    return this.httpClient.put<any>(this.apiUrl + "/update/langs/add?" + str +  "cvId=" + cvId, {languageIds, cvId})
    .pipe(catchError(this.errorHandler));
  }

  removeLanguage(languageId: number, cvId: number):Observable<any>{
    return this.httpClient.put(this.apiUrl + "/update/langs/remove?candLangIds=" + languageId + "&cvId=" + cvId, {languageId, cvId})
    .pipe(catchError(this.errorHandler));
  }

  updateSkills(skillIds: number[], cvId:number):Observable<any>{
    let str : string = "";
    skillIds.map(id => str += "candSkillIds=" + id + "&");

    return this.httpClient.put<any>(this.apiUrl + "/update/skills/add?" + str + "&cvId=" + cvId, {skillIds, cvId})
    .pipe(catchError(this.errorHandler)); 
  }

  removeSkill(skillId: number, cvId:number):Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + "/update/skills/remove?candSkillIds=" + skillId + "&cvId=" +cvId, {skillId, cvId} )
    .pipe(catchError(this.errorHandler));
  }

  updateTitle(title: string, cvId: number):Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + "/update/title?cvId=" + cvId +"&title=" + title, {title, cvId})
    .pipe(catchError(this.errorHandler));
  }

  updateCoverLetter(coverLetter: string, cvId: number):Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + "/update/coverLetter?coverLetter=" + coverLetter + "&cvId=" + cvId, {coverLetter, cvId})
    .pipe(catchError(this.errorHandler));
  }

  updateImage(imageId: number, cvId: number):Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + "/update/image?cvId=" + cvId + "&imgId=" + imageId, {imageId, cvId})
    .pipe(catchError(this.errorHandler));
  }

  deleteById(cvId:number):Observable<any>{
    return this.httpClient.delete<any>(this.apiUrl + "/delete/byId?cvId=" + cvId)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }


}
