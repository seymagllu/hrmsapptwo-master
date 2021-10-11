import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate/candidate.service';

@Component({
  selector: 'app-add-linkedin',
  templateUrl: './add-linkedin.component.html',
  styleUrls: ['./add-linkedin.component.css']
})
export class AddLinkedinComponent implements OnInit {
  
  @Input() candidate: Candidate;
  @Output() addLinkedinEvent = new EventEmitter<string>();
  addLinkedinForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private candidateService: CandidateService,
      private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createAddLinkedinForm();
  }

  createAddLinkedinForm(){
    this.addLinkedinForm = this.formBuilder.group({
      linkedinLink: ["", Validators.required]
    });
  }

  addLinkedinLink(){
    if(this.addLinkedinForm.valid){
      let link : string = this.addLinkedinForm.get("linkedinLink").value;
      this.candidateService.addLinkedinLink(this.candidate.id, link).subscribe(res => {
        this.toastrService.success("Linkedin Hesabı Güncellendi...");
        this.addLinkedinEvent.emit(link);
        this.addLinkedinForm.reset('');
      });
    }
  }


}
