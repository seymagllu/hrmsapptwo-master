import { Component, Input, OnInit, Output } from '@angular/core';
import { JobExperienceList } from 'src/app/models/job-experience/jobExperienceList';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateJobExperienceService } from 'src/app/services/candidate/candidate-job-experience/candidate-job-experience.service';
import { EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-job-experience-list',
  templateUrl: './job-experience-list.component.html',
  styleUrls: ['./job-experience-list.component.css']
})
export class JobExperienceListComponent implements OnInit {

  @Input() candidate: Candidate;
  @Output() deleteJobExperienceEvent = new EventEmitter<number>();

  candidateJobExperiences: JobExperienceList[] = [];
  color = "transparent"

  constructor(private jobExpService: CandidateJobExperienceService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.candidateJobExperiences = this.candidate.candidateJobExperiences;
  }

  deleteJobExperience(id:number){
    this.jobExpService.deleteById(id).subscribe(res => {
          this.toastrService.success("İş Tecrübesi Silindi");
          this.deleteJobExperienceEvent.emit(id);
    });
  }

}
