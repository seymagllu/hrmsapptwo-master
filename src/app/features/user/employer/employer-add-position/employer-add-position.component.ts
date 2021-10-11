import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Position } from 'src/app/models/position/position';
import { PositionListResponse } from 'src/app/models/position/positionListResponse';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-employer-add-position',
  templateUrl: './employer-add-position.component.html',
  styleUrls: ['./employer-add-position.component.css']
})
export class EmployerAddPositionComponent implements OnInit {

  positionAddForm: FormGroup;
  @Output() addPosEvent = new EventEmitter<Position>();

  constructor(private formBuilder: FormBuilder, private positionService: PositionService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createPositionAddForm();
  }

  createPositionAddForm(){
    this.positionAddForm = this.formBuilder.group({
      title: ["", Validators.required]
    })
  }

  addPosition(){
    let newPosition: Position = this.positionAddForm.value;    
    if(this.positionAddForm.valid){
      this.positionService.addPosition(newPosition).subscribe(res => {
        this.addPosEvent.emit(res.data);
        this.positionAddForm.reset('');
        this.toastrService.success("Yeni Pozisyon Eklendi...")
      },
      err => this.toastrService.error("Hata Oluştu..."))
    }
  }
}
