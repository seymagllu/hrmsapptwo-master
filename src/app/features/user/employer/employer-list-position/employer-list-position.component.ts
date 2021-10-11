import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Position } from 'src/app/models/position/position';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-employer-list-position',
  templateUrl: './employer-list-position.component.html',
  styleUrls: ['./employer-list-position.component.css']
})
export class EmployerListPositionComponent implements OnInit {

  positions: Position[] = [];

  constructor(private positionService: PositionService,
                private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getPositions();
  }

  getPositions(){
    this.positionService.getAllPositions().subscribe(res => this.positions = res.data,
                                                      err => this.toastrService.error("hata"));
  }

  updatePositions(pos: Position){
    this.positions.push(pos);
  }

}
