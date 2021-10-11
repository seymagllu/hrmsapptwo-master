import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DepartmentListResponse } from 'src/app/models/department/departmentListResponse';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  
  apiUrl:string = "https://javareactcamp-hrms-backend.herokuapp.com/api/departments";

  constructor(private httpClient: HttpClient) { }

  getAllDepartments():Observable<DepartmentListResponse>{
    return this.httpClient.get<DepartmentListResponse>(this.apiUrl + "/get/all")
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
