import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SystemEmployee } from 'src/app/models/user/system-employee/systemEmployee';
import { SystemEmployeeService } from 'src/app/services/system-employee/system-employee.service';
;

@Component({
  selector: 'app-system-employee-update',
  templateUrl: './system-employee-update.component.html',
  styleUrls: ['./system-employee-update.component.css']
})
export class SystemEmployeeUpdateComponent implements OnInit {


  @Input() systemEmployee : SystemEmployee = {
    id: -1,
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  @Output() updateSystemEmployeeEvent = new EventEmitter<SystemEmployee>();

  updateFirstNameForm: FormGroup;
  updateLastNameForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private systemEmployeeService: SystemEmployeeService,
              private toastrService: ToastrService
              ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createUpdateFirstNameForm(){
    this.updateFirstNameForm = this.formBuilder.group({
      firstName : ["", Validators.required]
    });
  }

  createUpdateLastNameForm(){
    this.updateLastNameForm = this.formBuilder.group({
      lastName: ["", Validators.required]
    });
  }

  createForm(){
    this.createUpdateFirstNameForm();
    this.createUpdateLastNameForm();
  }

  updateFirstName(id:number){
    if(this.updateFirstNameForm.valid){
      this.systemEmployeeService.updateFirstName(this.updateFirstNameForm.get("firstName").value, id)
        .subscribe(res => {
                            this.toastrService.success(res.data.firstName);
                            this.updateSystemEmployeeEvent.emit(res.data);
                            this.updateFirstNameForm.reset('');
                          },
                    err => this.toastrService.error(err)            
        );
    }
  }

  updateLastName(id:number){
    if(this.updateLastNameForm.valid){
      this.systemEmployeeService.updateLastName(this.updateLastNameForm.get("lastName").value, id)
        .subscribe(res => {
                            this.toastrService.success(res.data.lastName);
                            this.updateSystemEmployeeEvent.emit(res.data);
                            this.updateLastNameForm.reset('');
                          },
                    err => this.toastrService.error(err)              
        );
    }
  }

}
