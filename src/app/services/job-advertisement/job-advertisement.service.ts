import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { JobAdvertisementListResponse } from 'src/app/models/job-advertisement/jobAdvertisementListResponse';
import { CheckResponse } from 'src/app/models/shared/checkResponse';

@Injectable({
  providedIn: 'root'
})
export class JobAdvertisementService {

  apiUrl:string = "https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements";

  constructor(private httpClient: HttpClient) { }

  getAllAdvertisements():Observable<JobAdvertisementListResponse>{
    return this.httpClient.get<JobAdvertisementListResponse>(this.apiUrl + "/get/all")
    .pipe(catchError(this.errorHandler));
  }

  getAllActiveAdvertisements():Observable<JobAdvertisementListResponse>{
    return this.httpClient.get<JobAdvertisementListResponse>(this.apiUrl + "/get/active")
    .pipe(catchError(this.errorHandler));
  }

  addJobAdvertisement(jobAdvertisement: JobAdvertisement):Observable<any>{
    return this.httpClient.post<any>(this.apiUrl + "/add", jobAdvertisement)
    .pipe(catchError(this.errorHandler));
  }

  getAdsByCreatedAt(sortDirection: number):Observable<JobAdvertisementListResponse>{
    return this.httpClient.get<JobAdvertisementListResponse>(this.apiUrl + "/get/activeVerifiedByCreatedAt?sortDirection=" + sortDirection)
    .pipe(catchError(this.errorHandler));
  }

  getActiveAdsByEmployer(employerId: number):Observable<JobAdvertisementListResponse>{
    return this.httpClient.get<JobAdvertisementListResponse>(this.apiUrl + "/get/publicByEmployer?employerId=" + employerId)
    .pipe(catchError(this.errorHandler));
  }

  getAllAdsByEmployer(employerId: number):Observable<JobAdvertisementListResponse>{
    return this.httpClient.get<JobAdvertisementListResponse>(this.apiUrl + "/get/byEmployer?employerId=" + employerId)
    .pipe(catchError(this.errorHandler));
  }

  updateActivationStatus(jobAdId: number, status: boolean):Observable<JobAdvertisementListResponse>{
    return this.httpClient.put<JobAdvertisementListResponse>(this.apiUrl + "/update/activation?jobAdvId=" + jobAdId + "&status=" + status, {jobAdId, status})
    .pipe(catchError(this.errorHandler));
  }

  updateVerificationStatus(jobAdId: number, status: boolean):Observable<JobAdvertisementListResponse>{
    return this.httpClient.put<JobAdvertisementListResponse>(this.apiUrl + "/update/verification?jobAdvId=" + jobAdId + "&status=" + status, {jobAdId, status})
      .pipe(catchError(this.errorHandler));
  }

  deleteAd(id: number):Observable<CheckResponse>{
    return this.httpClient.delete<CheckResponse>(this.apiUrl + "/delete/byId?jobAdvId=" + id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
