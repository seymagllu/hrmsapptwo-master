import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidateLanguage } from 'src/app/models/candidate-language/candidateLanguage';
import { Language } from 'src/app/models/language/language';
import { LanguageList } from 'src/app/models/language/languageList';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateLanguageService } from 'src/app/services/candidate/candidate-language/candidate-language.service';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-language-add',
  templateUrl: './language-add.component.html',
  styleUrls: ['./language-add.component.css']
})
export class LanguageAddComponent implements OnInit {

  @Input() candidate : Candidate;
  @Output() addLanguageEvent = new EventEmitter<LanguageList>();

  languages : Language[] = [];

  languageLevelInformation = [
    {
      level: "A1",
      description: "Başlangıç Seviyesi"
    },
    {
      level: "A2",
      description: "Temel Seviye"
    },
    {
      level: "B1",
      description: "Orta Seviye Öncesi"
    },
    {
      level: "B2",
      description: "Orta Seviye"
    },
    {
      level: "C1",
      description: "Orta Seviye Üstü"
    },
    {
      level: "C2",
      description: "İleri Seviye"
    }
  ];
  
  addLanguageForm: FormGroup;

  constructor(private languageService: LanguageService,
    private candidateLanguageService: CandidateLanguageService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllLanguages();
    this.createAddLanguageForm();
  }

  createAddLanguageForm() {
    this.addLanguageForm = this.formBuilder.group({
      name: ["", Validators.required],
      languageLevel: ["", Validators.required]
    });
  }

  getAllLanguages() {
    this.languageService.getAllLanguages().subscribe(res => this.languages = res.data);
  }




  addLanguage() {
    if (this.addLanguageForm.valid) {
      let candidateLanguage: CandidateLanguage = this.addLanguageForm.value;

      candidateLanguage.candidateId = this.candidate.id
      candidateLanguage.languageId = +this.addLanguageForm.get("name").value
      this.candidateLanguageService.addCandidateLanguage(candidateLanguage).subscribe(res => {
                                                                                              this.toastrService.success("Dil Yeteneği Eklendi");
                                                                                              this.addLanguageEvent.emit(res.data);
                                                                                              this.addLanguageForm.reset('');
                                                                                            },
                                                                                            (err: HttpErrorResponse) => this.toastrService.error(err.error.data.errors["uk"]));
    }
  }

}
