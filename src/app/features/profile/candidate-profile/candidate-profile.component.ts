import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateSchool } from 'src/app/models/candidate-school/candidateSchool';
import { Image } from 'src/app/models/image/image';
import { JobExperienceList } from 'src/app/models/job-experience/jobExperienceList';
import { LanguageList } from 'src/app/models/language/languageList';
import { SchoolList } from 'src/app/models/school/schoolList';
import { SkillList } from 'src/app/models/skill/skillList';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate/candidate.service';


@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {

  candId: number;
  candidate: Candidate;


  constructor(private candidateService: CandidateService,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.candId = params["id"]);
    this.getCandidateById();
  }

  getCandidateById(){
    this.candidateService.getCandidateById(this.candId).subscribe(res => this.candidate = res.data);
  }

  updateJobExperiencesAfterDelete(id){
    let indexArray : number[] = this.candidate.candidateJobExperiences.map(jobExp => jobExp.id);
    let indexOfExperience = indexArray.indexOf(id);
    this.candidate.candidateJobExperiences.splice(indexOfExperience, 1);
  }

  updateJobExperiencesAfterAdd(jobExperience: JobExperienceList){
    this.candidate.candidateJobExperiences.push(jobExperience);
  }

  updateSchoolsAfterDelete(id:number){
    let indexArray: number[] = this.candidate.candidateSchools.map(school => school.id);
    let indexOfSchool = indexArray.indexOf(id);
    this.candidate.candidateSchools.splice(indexOfSchool, 1);
  }

  updateSchoolsAfterAdd(school: SchoolList){
    this.candidate.candidateSchools.push(school);
  }

  updateLanguagesAfterDelete(id:number){
    let indexArray : number[] = this.candidate.candidateLanguages.map(language => language.id);
    let indexOfLanguage = indexArray.indexOf(id);
    this.candidate.candidateLanguages.splice(indexOfLanguage, 1);
  }

  updateLanguagesAfterAdd(language: LanguageList){
    this.candidate.candidateLanguages.push(language);
  }

  updateSkillsAfterDelete(id:number){
    let indexArray : number[] = this.candidate.candidateSkills.map(skill => skill.id);
    let indexOfSkill = indexArray.indexOf(id);
    this.candidate.candidateSkills.splice(indexOfSkill,1);
  }

  updateSkillsAfterAdd(skill: SkillList){
    this.candidate.candidateSkills.push(skill);
  }

  updateLinkedinAccount(link: string){
    this.candidate.linkedinAccount = link;
  }

  updateGithubAccount(link: string){
    this.candidate.githubAccount = link;
  }

  updateImagesAfterAdd(image: Image){
    this.candidate.images.push(image);
  }

  updateImagesAfterDelete(id:number){
    let indexArray : number[] = this.candidate.images.map(image => image.id);
    let indexOfImage = indexArray.indexOf(id);
    this.candidate.images.splice(indexOfImage,1);
  }


}
