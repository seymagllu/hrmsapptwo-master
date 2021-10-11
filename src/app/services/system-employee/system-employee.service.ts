import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SystemEmployeeSingleResponse } from 'src/app/models/user/system-employee/systemEmployeeSingleResponse';

@Injectable({
  providedIn: 'root'
})
export class SystemEmployeeService {

  apiUrl:string = "https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees"

  constructor(private httpClient : HttpClient) { }

  getById(systemId: number):Observable<SystemEmployeeSingleResponse>{
    return this.httpClient.get<SystemEmployeeSingleResponse>(this.apiUrl + "/get/byId?sysEmplId=" + systemId)
    .pipe(catchError(this.errorHandler));
  }

  updateFirstName(firstName: string, id:number):Observable<SystemEmployeeSingleResponse>{
    return this.httpClient.put<SystemEmployeeSingleResponse>(this.apiUrl + "/update/firstName?firstName=" + firstName  + "&sysEmplId=" + id, {firstName, id})
    .pipe(catchError(this.errorHandler));
  }

  updateLastName(lastName: string, id:number):Observable<SystemEmployeeSingleResponse>{
    return this.httpClient.put<SystemEmployeeSingleResponse>(this.apiUrl + "/update/lastName?lastName=" + lastName  + "&sysEmplId=" + id, {lastName, id})
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

}
