import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateCv } from 'src/app/models/cv/candidateCv';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CvService } from 'src/app/services/cv/cv.service';

@Component({
  selector: 'app-cv-update',
  templateUrl: './cv-update.component.html',
  styleUrls: ['./cv-update.component.css']
})
export class CvUpdateComponent implements OnInit {

  @Input() candidate: Candidate;
  @Output() updateCvEvent = new EventEmitter<CandidateCv>();

  candidateCvIds : number[] = [];
  candidateCvs: CandidateCv[] = [];
  updateTitleForm: FormGroup;
  updateCoverLetterForm: FormGroup;
  

  constructor(private cvService: CvService, private formBuilder: FormBuilder, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createUpdateTitleForm();
    this.createUpdateCoverLetterForm();
    this.getCvIds();
  }

  // *********************************Update Title*********************************
  createUpdateTitleForm(){
    this.updateTitleForm = this.formBuilder.group({
      title: ["", Validators.required]
    })
  }

  updateTitle(cvId:number){
    if(this.updateTitleForm.valid){
      this.cvService.updateTitle(this.updateTitleForm.get("title").value, cvId).subscribe(res => {
        this.updateCvEvent.emit(res.data);
        this.toastrService.success("Başlık Güncellendi...")
        this.updateTitleForm.reset('');
      },
      err => this.toastrService.error("Bilgiler Güncel...")
      );
    }
  }
  // *************************************************************************************

  // *********************************Update Cover Letter*********************************
  createUpdateCoverLetterForm(){
    this.updateCoverLetterForm = this.formBuilder.group({
      coverLetter: ["", Validators.required]
    });
  }

  updateCoverLetter(cvId:number){
    if(this.updateCoverLetterForm.valid){
      this.cvService.updateCoverLetter(this.updateCoverLetterForm.get("coverLetter").value, cvId).subscribe(res => {
        this.updateCvEvent.emit(res.data);
        this.toastrService.success("Ön Yazı Güncellendi...")
        this.updateCoverLetterForm.reset('');
      },
      err => this.toastrService.error("Bilgiler Güncel...")
    );
    }
  }
  // *************************************************************************************
  
  
  getCvIds(){
    this.candidate.cvs.map(item => this.candidateCvIds.push(item.id));
    this.candidateCvIds.forEach(id => this.cvService.getCvById(id).subscribe(res => this.candidateCvs.push(res.data)));
    console.log(this.candidateCvIds)
  }

  clearCvList(){
    this.candidateCvs = [];
    this.candidateCvIds = [];
  }

  // *******************************Update Job Experiences********************************************************************
  updateJobExperiences(){
    // Candidate Profilinde olan ancak Cv'de olmayan İş Tecrübesi Id'lerini arıyoruz...
    // Bunları lokal statelerde tutuyoruz...
    let candidateJobExpIds : number[] = [];
    let cvJobExpIds: number[] = [];
    
    // Bu lokal statelerin içlerini dolduruyoruz...
    this.candidate.candidateJobExperiences.forEach(jobExp => candidateJobExpIds.push(jobExp.id));
    this.candidateCvs[0].candidateJobExperiences.forEach(jobExp => cvJobExpIds.push(jobExp.id));

    // Sayfanın dinamik güncellenmesi için en yukarıda tuttuğumuz Cv State'ini güncelliyoruz.
    console.log(cvJobExpIds);
    this.candidateCvs[0].candidateJobExperiences = [...this.candidate.candidateJobExperiences];

    // Filter methoduyla Candidate'da olan ancak Cv'de olmayan id'leri bulup bunları serviste yazdığımız methoda gönderiyoruz.
    let newExpIds : number[] = candidateJobExpIds.filter(id => cvJobExpIds.indexOf(id) === -1);
    this.cvService.updateJobExperiences(newExpIds, this.candidateCvIds[0])
    .subscribe(res => {
                        this.updateCvEvent.emit(res.data);
                        this.toastrService.success("İş Tecrübeleri Güncellendi...")
                      },
                      err => this.toastrService.error("Bilgiler Güncel..."));
  }
  // *******************************Remove Job Experience********************************************************************
  removeJobExperience(jobExpId: number, cvId: number){
    this.cvService.removeJobExperience(jobExpId, cvId)
    .subscribe(res => {
                        this.updateCvEvent.emit(res.data);
                        this.toastrService.success("İş Tecrübeleri Güncellendi...")
                        },
                        err => this.toastrService.error("Bilgiler Güncel..."));

    let indexOfCv : number;
    let cvJobExpIds: number[] = [];

    cvJobExpIds = this.candidateCvs[0].candidateJobExperiences.map(item => item.id);
    indexOfCv = cvJobExpIds.indexOf(jobExpId);
    this.candidateCvs[0].candidateJobExperiences.splice(indexOfCv, 1);
  }
// *******************************Update School********************************************************************
  updateSchools(cvId:number){
    let candidateSchoolIds : number[] = [];
    let cvSchoolIds: number[] = [];
    let newSchoolIds: number[] = [];

    this.candidate.candidateSchools.forEach(school => candidateSchoolIds.push(school.id));
    this.candidateCvs[0].candidateSchools.forEach(school => cvSchoolIds.push(school.id));

    this.candidateCvs[0].candidateSchools = [...this.candidate.candidateSchools];

    console.log(candidateSchoolIds);
    console.log(cvSchoolIds);

    newSchoolIds = candidateSchoolIds.filter(id => cvSchoolIds.indexOf(id) === -1);
    this.cvService.updateSchools(newSchoolIds, cvId)
    .subscribe(res => {
                        this.toastrService.success("Eğitim Bilgileri Güncellendi...");
                        this.updateCvEvent.emit(res.data);
                      },
                      err => console.log(err));
  }
// *******************************Remove School********************************************************************
  removeSchool(schoolId:number, cvId:number){
    this.cvService.removeSchool(schoolId, cvId)
    .subscribe(res => {
                          this.updateCvEvent.emit(res.data);
                          this.toastrService.success("Eğitim Bilgileri Güncellendi...")
                      },
                      err => this.toastrService.error("Bilgiler Güncel..."));
    
    let cvSchoolIds: number[] = [];
    cvSchoolIds = this.candidateCvs[0].candidateSchools.map(school => school.id);

    console.log(cvSchoolIds);
    
    let indexOfSchool : number = cvSchoolIds.indexOf(schoolId);
    console.log(indexOfSchool)

    this.candidateCvs[0].candidateSchools.splice(indexOfSchool, 1);

  }

// *******************************Update Languages********************************************************************


  updateLanguages(cvId: number){
    let candidateLanguageIds: number[] = [];
    let cvLanguageIds: number[] = [];
    let newLanguageIds: number[] = [];

    this.candidate.candidateLanguages.forEach(language => candidateLanguageIds.push(language.id));
    this.candidate.cvs.forEach(cv => cv.candidateLanguages.forEach(language => cvLanguageIds.push(language.id)));

    this.candidateCvs.forEach(cv => cv.candidateLanguages = [...this.candidate.candidateLanguages]);

    newLanguageIds = candidateLanguageIds.filter(id => cvLanguageIds.indexOf(id) === -1);
    this.cvService.updateLanguages(newLanguageIds, cvId)
      .subscribe(res => {
                        this.updateCvEvent.emit(res.data);
                        this.toastrService.success("Dil Yetkinlikleri Güncellendi")
                      },
                      err => this.toastrService.error("Bilgiler Güncel..."));
  }

// *******************************Remove Language********************************************************************

  removeLanguage(languageId: number, cvId:number){
    this.cvService.removeLanguage(languageId, cvId)
    .subscribe(res => {
                        this.updateCvEvent.emit(res.data)
                        this.toastrService.success("Dil Yetkinlikleri Güncellendi");
                      },
                      err => this.toastrService.error("Bilgiler Güncel..."));

    let cvLanguageIds: number[] = [];
    cvLanguageIds = this.candidateCvs[0].candidateLanguages.map(language => language.id);

    let indexOfLanguage : number = cvLanguageIds.indexOf(languageId);
    this.candidateCvs[0].candidateLanguages.splice(indexOfLanguage, 1);

  }
// *******************************Update Skill********************************************************************

  updateSkills(cvId:number){
    let candidateSkillIds: number[] = [];
    let cvSkillIds: number[] = [];
    let newSkillIds: number[] = [];

    this.candidate.candidateSkills.forEach(skill => candidateSkillIds.push(skill.id));
    this.candidateCvs.forEach(cv => cv.candidateSkills.forEach(skill => cvSkillIds.push(skill.id)));

    this.candidateCvs.forEach(cv => cv.candidateSkills = [...this.candidate.candidateSkills]);

    newSkillIds = candidateSkillIds.filter(id => cvSkillIds.indexOf(id) === -1);
    
    this.cvService.updateSkills(newSkillIds, cvId)
    .subscribe(
      res => {
        this.updateCvEvent.emit(res.data);
        this.toastrService.success("Beceriler Güncellendi...");
      },
      err => this.toastrService.error("Bilgiler Güncel...")
    );
  }
// *******************************Remove Skill********************************************************************

  removeSkill(skillId: number, cvId:number){
    this.cvService.removeSkill(skillId, cvId)
      .subscribe(res => {
        this.updateCvEvent.emit(res.data);
        this.toastrService.success("Beceriler Güncellendi...");
      },
      err => this.toastrService.error("Bilgiler Güncel...")       
    );

    let cvSkillIds: number[] = [];
    cvSkillIds = this.candidateCvs[0].candidateSkills.map(skill => skill.id);

    let indexOfSkill : number = cvSkillIds.indexOf(skillId);
    this.candidateCvs[0].candidateSkills.splice(indexOfSkill, 1);
  }

  // *******************************Update Image********************************************************************
  updateImage(cvId:number){
    let candidateImageIds : number[] = []
    candidateImageIds = this.candidate.images.map(image => image.id);
    let maxId = candidateImageIds.reduce((a,b) => Math.max(a,b), 0);
    console.log(maxId);

    this.cvService.updateImage(maxId, cvId).subscribe(res => {
      this.updateCvEvent.emit(res.data);
      this.toastrService.success("Fotoğraf Güncellendi...");
    },
    err => this.toastrService.error("Bilgiler Güncel...")                                      
    );

    this.candidateCvs.forEach(cv => cv.image = this.candidate.images[this.candidate.images.length -1]);
  }
  
  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 100);
  }
  
}
