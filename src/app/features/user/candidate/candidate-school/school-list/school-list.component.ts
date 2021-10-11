import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SchoolList } from 'src/app/models/school/schoolList';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateSchoolService } from 'src/app/services/candidate/candidate-school/candidate-school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  @Input() candidate: Candidate;
  @Output() deleteSchoolEvent = new EventEmitter<number>();

  candidateSchools : SchoolList[] = [];
  color = "transparent";

  constructor(private candSchoolService: CandidateSchoolService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.candidateSchools = this.candidate.candidateSchools;
  }

  deleteSchool(id:number){
    this.candSchoolService.deleteById(id).subscribe(res => {
      this.toastrService.success("Eğitim Bilgisi Silindi...");
      this.deleteSchoolEvent.emit(id);
    })
  }



}
