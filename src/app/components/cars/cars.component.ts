import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';



@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent implements OnInit {

  private cars : any[] = [];

  constructor(private carsService: CarsService) {
    this.cars = carsService.getCarsList();
  }

  ngOnInit() {
  }

}
