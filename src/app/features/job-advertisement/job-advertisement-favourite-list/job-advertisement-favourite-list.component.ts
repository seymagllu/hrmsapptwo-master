import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate/candidate.service';

@Component({
  selector: 'app-job-advertisement-favourite-list',
  templateUrl: './job-advertisement-favourite-list.component.html',
  styleUrls: ['./job-advertisement-favourite-list.component.css']
})
export class JobAdvertisementFavouriteListComponent implements OnInit {

  favouriteAds: JobAdvertisement[] = [];
  candidate: Candidate;
  filterText:string = "";
  
  constructor(private candidateService: CandidateService,
            ) { }

  ngOnInit(): void {
    this.getCandidateById();

  }

  getUserId(){
    return JSON.parse(localStorage.getItem("user")).id;
  }

  getCandidateById(){
    this.candidateService.getCandidateById(this.getUserId()).subscribe(res => {
      this.favouriteAds = res.data.favoriteJobAdvertisements;
    });
  }


  removeFromFavourites(advId:number){
    let indexArray = this.favouriteAds.map(ad => ad.id);
    let indexOfAd = indexArray.indexOf(advId);
    this.candidateService.removeFromFavourites(this.getUserId(), advId).subscribe(res => {
      console.log(res.data.id)
      this.favouriteAds.splice(indexOfAd, 1);
    })
  }



}
