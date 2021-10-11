import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidateSchool } from 'src/app/models/candidate-school/candidateSchool';
import { Department } from 'src/app/models/department/department';
import { School } from 'src/app/models/school/school';
import { SchoolList } from 'src/app/models/school/schoolList';
import { Candidate } from 'src/app/models/user/candidate/candidate';
import { CandidateSchoolService } from 'src/app/services/candidate/candidate-school/candidate-school.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { SchoolService } from 'src/app/services/school/school.service';

@Component({
  selector: 'app-school-add',
  templateUrl: './school-add.component.html',
  styleUrls: ['./school-add.component.css']
})
export class SchoolAddComponent implements OnInit {

  @Input() candidate: Candidate
  @Output() addSchoolEvent = new EventEmitter<SchoolList>();
  
  validDates: boolean = true;

  addSchoolForm: FormGroup;

  schools: School[] = [];
  departments: Department[] = [];


  constructor(private formBuilder: FormBuilder,
              private schoolService: SchoolService,
              private departmentService: DepartmentService,
              private candidateSchoolService: CandidateSchoolService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createAddSchoolForm();
    this.getAllSchools();
    this.getAllDepartments();
  }

  getAllSchools(){
    this.schoolService.getAllSchools().subscribe(res => this.schools = res.data);
  }

  getAllDepartments(){
    this.departmentService.getAllDepartments().subscribe(res => this.departments = res.data);
  }

  createAddSchoolForm(){
    this.addSchoolForm = this.formBuilder.group({
      departmentId: ["", Validators.required],
      graduationYear: [""],
      schoolId: ["", Validators.required],
      startYear: ["", Validators.required]
    })
  }

  checkDates(){
    if(this.addSchoolForm.get("startYear").value > this.addSchoolForm.get("graduationYear").value){
      this.validDates = false;
    }else{
      this.validDates = true;
    }
  }

  addSchool(){
    this.checkDates();
    if(this.addSchoolForm.valid){
      let candidateSchool: CandidateSchool = this.addSchoolForm.value;
      candidateSchool.candidateId = this.candidate.id;
      this.candidateSchoolService.addCandidateSchool(candidateSchool).subscribe(res => {
                                                                                        this.toastrService.success("Eğitim bilgisi eklendi...");
                                                                                        this.addSchoolEvent.emit(res.data);
                                                                                        this.addSchoolForm.reset('');
                                                                                       },
                                                                                (err : HttpErrorResponse ) => this.toastrService.error(err.error.data.errors["uk"]));
    }
  }

}
