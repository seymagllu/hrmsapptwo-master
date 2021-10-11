import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidateSkill } from 'src/app/models/candidate-skill/candidateSkill';
import { Skill } from 'src/app/models/skill/skill';
import { SkillList } from 'src/app/models/skill/skillList';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateSkillService } from 'src/app/services/candidate/candidate-skill/candidate-skill.service';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-skill-add',
  templateUrl: './skill-add.component.html',
  styleUrls: ['./skill-add.component.css']
})
export class SkillAddComponent implements OnInit {

  
  @Input() candidate: Candidate;
  @Output() addSkillEvent = new EventEmitter<SkillList>();
  
  skills: Skill[] = [];
  addSkillForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private skillService: SkillService,
              private candidateSkillService: CandidateSkillService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllSkills();
    this.createAddSkillForm();
  }

  createAddSkillForm(){
    this.addSkillForm = this.formBuilder.group({
      skillId: ["", Validators.required]
    });
  }

  getAllSkills(){
    return this.skillService.getAllSkills().subscribe(res => {this.skills = res.data;
    console.log(res.data)},
                                                        err => console.log(err));
  }

  addSkill(){
    if(this.addSkillForm.valid){
      let candidateSkill : CandidateSkill = this.addSkillForm.value;
      candidateSkill.candidateId = this.candidate.id
      this.candidateSkillService.addCandidateSkill(candidateSkill)
      .subscribe(res => {
        this.toastrService.success("Yetenek Eklendi");
        this.addSkillEvent.emit(res.data);
        this.addSkillForm.reset('');
      },
      (err: HttpErrorResponse) => this.toastrService.error(err.error.data.errors["uk"]));
    }
  }

}
