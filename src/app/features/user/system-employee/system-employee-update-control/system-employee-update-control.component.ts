import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/user/employer/employer';
import { EmployerService } from 'src/app/services/employer/employer.service';

@Component({
  selector: 'app-system-employee-update-control',
  templateUrl: './system-employee-update-control.component.html',
  styleUrls: ['./system-employee-update-control.component.css']
})
export class SystemEmployeeUpdateControlComponent implements OnInit {


  employers: Employer[] = [];
  filterText: string = "";

  constructor(private employerService: EmployerService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllEmployers();
  }

  getAllEmployers(){
    this.employerService.getAllEmployers()
          .subscribe(res => {
                              this.employers = res.data.filter(emp => emp.updateVerified !== null)
                            },
                    err => console.log(err));
  }

  applyChanges(empId: number){
    let indexArray = this.employers.map(emp => emp.id);
    let indexOfEmp = indexArray.indexOf(empId);
    this.employerService.applyChanges(empId).subscribe(res => {
      this.toastrService.success("Güncellemeler Onaylandı");
      this.employers[indexOfEmp].updateVerified = true;
    },
    err => this.toastrService.error("Hata Oluştu..."));      
  }
}
