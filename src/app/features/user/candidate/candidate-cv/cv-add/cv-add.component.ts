import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidateCv } from 'src/app/models/cv/candidateCv';
import { Cv } from 'src/app/models/cv/cv';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CvService } from 'src/app/services/cv/cv.service';

@Component({
  selector: 'app-cv-add',
  templateUrl: './cv-add.component.html',
  styleUrls: ['./cv-add.component.css']
})
export class CvAddComponent implements OnInit {
  
  @Input() candidate: Candidate
  @Output() addCvEvent = new EventEmitter<CandidateCv>();

  cv: Cv = {
    candidateId: 0,
    candidateJobExperienceIds: [],
    candidateLanguageIds: [],
    candidateSchoolIds: [],
    candidateSkillIds: [],
    coverLetter: "",
    title: "",
  };
  
  cvAddForm: FormGroup;



  constructor(private formBuilder: FormBuilder,
              private cvService: CvService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createCvAddForm();
  }

  createCvAddForm(){
    this.cvAddForm = this.formBuilder.group({
      title: ["", Validators.required],
      coverLetter: ["", Validators.required]
    });
  }

  createCv(){
    this.cv.candidateId = this.candidate.id;
    this.cv.candidateJobExperienceIds = this.candidate.candidateJobExperiences.map(item => item.id);
    this.cv.candidateLanguageIds = this.candidate.candidateLanguages.map(item => item.id);
    this.cv.candidateSchoolIds = this.candidate.candidateSchools.map(item => item.id);
    this.cv.candidateSkillIds = this.candidate.candidateSkills.map(item => item.id);
    if(this.cvAddForm.valid){
      this.cv.title = this.cvAddForm.get("title").value;
      this.cv.coverLetter = this.cvAddForm.get("coverLetter").value;
      this.cvService.addCv(this.cv).subscribe(res=>{
        console.log(res);
        this.toastrService.success("Özgeçmiş Eklendi...")
        this.pageReloadDelay();
      },
      (err: HttpErrorResponse) => this.toastrService.error(err.error.data.errors["uk"])
      );
  
    }
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 100);
  }

}
