import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';

import { Car } from '../../shared/models/car.model';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html'
})
export class CarFormComponent implements OnInit {

  public years: number[] = [];
  public engineTypes : string[] = [];
  private newCar: Car = new Car();

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.years = this.generateYearList(1990, 2017);
    //console.log(this.years);
    this.engineTypes = this.carsService.getEngineTypes();
  }

  public generateYearList(from, to){
    let years:number[] = [];
    for (var i = from; i < to; i++) {
        years.push(i);
    }
    return years;
  }

}
