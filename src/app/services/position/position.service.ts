import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Position } from 'src/app/models/position/position';
import { PositionListResponse } from 'src/app/models/position/positionListResponse';
import { PositionSingleResponse } from 'src/app/models/position/positionSingleResponse';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  apiUrl:string = "https://javareactcamp-hrms-backend.herokuapp.com/api/positions";

  constructor(private httpClient: HttpClient) { }
  

  getAllPositions():Observable<PositionListResponse>{
    return this.httpClient.get<PositionListResponse>(this.apiUrl + "/get/all")
    .pipe(catchError(this.errorHandler));
  }
  
  addPosition(position:Position):Observable<PositionSingleResponse>{
    return this.httpClient.post<PositionSingleResponse>(this.apiUrl + "/add?positionTitle=" + position.title, position)
    .pipe(catchError(this.errorHandler));
  }
  
  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
  
}
