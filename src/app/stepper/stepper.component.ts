import { StepperService } from './../stepper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  arr:any[]=[];
  constructor(private __stepperService: StepperService) {}

  ngOnInit(): void {
    this.__stepperService.getAllComments().subscribe((res) => {
      console.log(res);
      this.arr = res
      this.arr.sort((a,b) => b.id - a.id);
    });
  }
}
