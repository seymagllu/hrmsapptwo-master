import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JobExperience } from 'src/app/models/job-experience/jobExperience';
import { Position } from 'src/app/models/position/position';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateJobExperienceService } from 'src/app/services/candidate/candidate-job-experience/candidate-job-experience.service';
import { PositionService } from 'src/app/services/position/position.service';
import { EventEmitter } from '@angular/core';
import { JobExperienceList } from 'src/app/models/job-experience/jobExperienceList';

@Component({
  selector: 'app-job-experience-add',
  templateUrl: './job-experience-add.component.html',
  styleUrls: ['./job-experience-add.component.css']
})
export class JobExperienceAddComponent implements OnInit {


  @Input() candidate: Candidate;
  @Output() addJobExperienceEvent = new EventEmitter<JobExperienceList>();

  positions: Position[];
  validDates: boolean = true;
  


  jobExperienceForm: FormGroup;

  constructor(
              private positionService: PositionService,
              private formBuilder: FormBuilder,
              private jobExperienceService: CandidateJobExperienceService,
              private toastrService: ToastrService
              ) { }

  ngOnInit(): void {
    this.getAllPositions();
    this.createJobExperienceForm();
  }

  createJobExperienceForm(){
    this.jobExperienceForm = this.formBuilder.group({
      positionId: ["", Validators.required],
      startYear: ["", Validators.required],
      quitYear: [""],
      workPlace: ["", Validators.required]
    });
  }

  checkDates(){
    if(this.jobExperienceForm.get("quitYear").value !== "" && (this.jobExperienceForm.get("startYear").value > this.jobExperienceForm.get("quitYear").value)){
      this.validDates = false;
    }else{
      this.validDates = true;
    }
  }

  getAllPositions(){
    this.positionService.getAllPositions().subscribe(res => this.positions = res.data);
  }


  addJobExperience(){
    this.checkDates();
    if(this.jobExperienceForm.valid){
      let jobExperience : JobExperience = this.jobExperienceForm.value;
      jobExperience.candidateId = this.candidate.id;
      this.jobExperienceService.addJobExperience(jobExperience).subscribe(res => {
                                                                                    this.toastrService.success("İş Tecrübesi Eklendi...");
                                                                                    this.addJobExperienceEvent.emit(res.data);
                                                                                    this.jobExperienceForm.reset('');
                                                                                 },
                                                                                    err => this.toastrService.error("Bilgiler hatalı ya da eksik"));
    }
  }
}
