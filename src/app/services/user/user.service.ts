import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CheckResponse } from 'src/app/models/shared/checkResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = "https://javareactcamp-hrms-backend.herokuapp.com/api/users/";

  constructor(private httpClient: HttpClient) { 

  }

  checkByEmail(email:string):Observable<CheckResponse>{
    return this.httpClient.get<CheckResponse>(this.apiUrl + "exists/byEmail?email=" + email)
    .pipe(catchError(this.errorHandler));
  }

  login(email:string, password: string):Observable<any>{
    return this.httpClient.get<any>(this.apiUrl + "login?email=" + email + "&password=" + password)
    .pipe(catchError(this.errorHandler));
  }

  updateProfileImage(imgId: number, userId: number):Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + "update/profileImg?imgId=" + imgId + "&userId=" + userId, {imgId, userId})
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
