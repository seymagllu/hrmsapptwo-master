import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CityListResponse } from 'src/app/models/city/cityListResponse';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  apiUrl:string = "https://javareactcamp-hrms-backend.herokuapp.com/api/cities";

  constructor(private httpClient: HttpClient) { }

  getAllCities():Observable<CityListResponse>{
    return this.httpClient.get<CityListResponse>(this.apiUrl + "/get/all")
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
