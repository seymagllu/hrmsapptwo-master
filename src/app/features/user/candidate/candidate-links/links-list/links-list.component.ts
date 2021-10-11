import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/user/candidate/candidate';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css']
})
export class LinksListComponent implements OnInit {

  @Input() candidate: Candidate;

  githubLink: string = "";
  linkedinLink: string = "";

  constructor() { }

  ngOnInit(): void {
    this.githubLink = this.candidate.githubAccount;
    this.linkedinLink = this.candidate.linkedinAccount;
  }

}
