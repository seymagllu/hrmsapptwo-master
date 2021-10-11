import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employer } from 'src/app/models/user/employer/employer';
import { EmployerListResponse } from 'src/app/models/user/employer/employerListResponse';
import { EmployerSingleResponse } from 'src/app/models/user/employer/employerSingleResponse';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  apiUrl:string = "https://javareactcamp-hrms-backend.herokuapp.com/api/employers";
  validEmployer: boolean = true;

  constructor(private httpClient: HttpClient) { }

  getAllEmployers():Observable<EmployerListResponse>{
    return this.httpClient.get<EmployerListResponse>(this.apiUrl + "/get/all")
    .pipe(catchError(this.errorHandler));
  }

  addEmployer(employer: Employer):Observable<EmployerSingleResponse>{
    return this.httpClient.post<EmployerSingleResponse>(this.apiUrl + "/add", employer)
      .pipe(catchError(this.errorHandler));
  }

  getEmployerById(empId: number):Observable<EmployerSingleResponse>{
    return this.httpClient.get<EmployerSingleResponse>(this.apiUrl + "/get/byId?emplId=" + empId)
    .pipe(catchError(this.errorHandler));
  }

  applyChanges(empId: number):Observable<EmployerSingleResponse>{
    return this.httpClient.put<EmployerSingleResponse>(this.apiUrl + "/update/applyChanges?emplId=" + empId, {empId})
    .pipe(catchError(this.errorHandler));
  }

  updateCompanyName(companyName: string, empId: number):Observable<EmployerSingleResponse>{
    return this.httpClient.put<EmployerSingleResponse>(this.apiUrl + "/update/companyName?companyName=" + companyName +"&emplId=" + empId, {companyName, empId})
    .pipe(catchError(this.errorHandler));
  }

  updateEmailAndWebsite(email:string, website:string, empId: number):Observable<EmployerSingleResponse>{
    return this.httpClient.put<EmployerSingleResponse>(this.apiUrl + "/update/emailAndWebsite?email=" + email + "&emplId=" + empId + "&website=" + website, {email,website, empId})
    .pipe(catchError(this.errorHandler));
  }
  
  updatePhoneNumber(phoneNumber:string, empId:number):Observable<EmployerSingleResponse>{
    return this.httpClient.put<EmployerSingleResponse>(this.apiUrl + "/update/phoneNumber?emplId=" + empId + "&phoneNumber=" + phoneNumber, {phoneNumber, empId})
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}


