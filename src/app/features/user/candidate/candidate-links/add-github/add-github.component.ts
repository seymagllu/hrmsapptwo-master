import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate/candidate.service';

@Component({
  selector: 'app-add-github',
  templateUrl: './add-github.component.html',
  styleUrls: ['./add-github.component.css']
})
export class AddGithubComponent implements OnInit {

  @Input() candidate: Candidate;
  @Output() addGithubEvent = new EventEmitter<string>();

  addGithubLinkForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private candidateService: CandidateService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createAddGithubLinkForm();
  }

  createAddGithubLinkForm(){
    this.addGithubLinkForm = this.formBuilder.group({
      githubLink: ["", Validators.required]
    });
  }

  addGithubLink(){
    if(this.addGithubLinkForm.valid){
      let link: string = this.addGithubLinkForm.get("githubLink").value;
      this.candidateService.addGithubLink(this.candidate.id, link).subscribe(res => {
        this.toastrService.success("Github Hesabı Güncellendi");
        this.addGithubEvent.emit(link);
        this.addGithubLinkForm.reset('');
      });
    }
  }

}
