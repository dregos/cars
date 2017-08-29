import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';

import { Car } from '../../shared/models/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent implements OnInit {

  private cars : Car[] = [];

  constructor(private carsService: CarsService) {
    this.cars = carsService.getCars();
  }

  ngOnInit() {
  }

  public remove(car:Car){
    this.carsService.removeCar(car);
    this.cars = this.carsService.getCars();
  }

}
