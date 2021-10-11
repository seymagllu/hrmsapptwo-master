import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate/candidate.service';

@Component({
  selector: 'app-candidate-sidebar',
  templateUrl: './candidate-sidebar.component.html',
  styleUrls: ['./candidate-sidebar.component.css']
})
export class CandidateSidebarComponent implements OnInit {

  candidate: Candidate;
  favouriteAds: JobAdvertisement[];
  favouriteCount: number;

  constructor(private candidateService: CandidateService,
              private store: Store<any>
              ) { }

  ngOnInit(): void {
    this.getCandidateById();
  }

  getUserId():number{
      return JSON.parse(localStorage.getItem("user")).id;
  }

  getCandidateById(){
    this.candidateService.getCandidateById(this.getUserId()).subscribe(res => {
      this.candidate = res.data;
    })
  }



}
