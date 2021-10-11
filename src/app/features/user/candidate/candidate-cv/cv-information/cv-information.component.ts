import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CandidateCv } from 'src/app/models/cv/candidateCv';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CvService } from 'src/app/services/cv/cv.service';

@Component({
  selector: 'app-cv-information',
  templateUrl: './cv-information.component.html',
  styleUrls: ['./cv-information.component.css']
})
export class CvInformationComponent implements OnInit {

  @Input() candidate: Candidate;
  @Input() cvs: CandidateCv[];

  candidateCvs : CandidateCv[] = [];
  constructor(private cvService: CvService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.candidateCvs = this.candidate.cvs;
  }

  deleteCv(id: number){
    let indexArr: number[] = this.candidateCvs.map(cv => cv.id);
    let indexOfCv : number = indexArr.indexOf(id);
    this.candidateCvs.splice(indexOfCv,1);
    this.cvService.deleteById(id).subscribe(res => {
      this.toastrService.error("Öz Geçmiş Silindi...");
    },
      err => this.toastrService.error("Bir Hata Oluştu")
    )
  }

}
