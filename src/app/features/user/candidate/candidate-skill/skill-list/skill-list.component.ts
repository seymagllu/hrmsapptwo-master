import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SkillList } from 'src/app/models/skill/skillList';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateSkillService } from 'src/app/services/candidate/candidate-skill/candidate-skill.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  @Input() candidate: Candidate;
  @Output() deleteSkillEvent = new EventEmitter<number>();

  candidateSkills : SkillList[] = [];
  color = "transparent";


  constructor(private candSkillService: CandidateSkillService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.candidateSkills = this.candidate.candidateSkills;
  }

  deleteSkill(id:number){
    this.candSkillService.deleteSkill(id).subscribe(res => {
      this.toastrService.success("Beceri Silindi...");
      this.deleteSkillEvent.emit(id);
    })
  }

}
