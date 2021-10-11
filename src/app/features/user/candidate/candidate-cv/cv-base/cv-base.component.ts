import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateCv } from 'src/app/models/cv/candidateCv';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate/candidate.service';
import { CvService } from 'src/app/services/cv/cv.service';

@Component({
  selector: 'app-cv-base',
  templateUrl: './cv-base.component.html',
  styleUrls: ['./cv-base.component.css']
})
export class CvBaseComponent implements OnInit {

  candidate : Candidate;
  candId: number;

  candidateCvs: CandidateCv[];



  constructor(private activatedRoute: ActivatedRoute,
              private candidateService: CandidateService,
              private cvService: CvService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.candId = params["id"]);
    this.getCandidateById();
    this.getCandidateCvs;
  }

  getCandidateById(){
    this.candidateService.getCandidateById(this.candId).subscribe(res => this.candidate = res.data);
  }

  getCandidateCvs(){
    this.candidateCvs = this.candidate.cvs;
  }

  updateCvs(candidateCv: CandidateCv){
    let cvIdArray : number[] = this.candidate.cvs.map(cv => cv.id);
    let indexOfCv = cvIdArray.indexOf(candidateCv.id);
    this.candidate.cvs[indexOfCv] = candidateCv;
  }

  addCv(candidateCv: CandidateCv){
    this.candidate.cvs.push(candidateCv);
  }


}
