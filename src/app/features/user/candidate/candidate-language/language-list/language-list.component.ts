import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LanguageList } from 'src/app/models/language/languageList';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateLanguageService } from 'src/app/services/candidate/candidate-language/candidate-language.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {

  @Input() candidate: Candidate;
  @Output() deleteLanguageEvent = new EventEmitter<number>();

  candidateLanguages : LanguageList[] = [];

  color = "transparent";

  constructor(private candidateLangService: CandidateLanguageService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.candidateLanguages = this.candidate.candidateLanguages;
  }

  deleteLanguage(id:number){
    this.candidateLangService.deleteLanguage(id).subscribe(res => {
                                                                    this.toastrService.success("Dil Yetkinliği Silindi...");
                                                                    this.deleteLanguageEvent.emit(id);
                                                                  })
  }


}
