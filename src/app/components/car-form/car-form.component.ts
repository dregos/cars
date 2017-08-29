import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../shared/models/car.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html'
})
export class CarFormComponent implements OnInit {

  public years: number[] = [];
  public engineTypes : string[] = [];
  public newCar: Car = new Car();
  public previewShow:boolean = false;

  constructor(private carsService: CarsService,
              private router:Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.years = this.generateYearList(1990, 2017);
    //console.log(this.years);
    this.engineTypes = this.carsService.getEngineTypes();

    this.route.params.subscribe(()=>{
  		let id = parseInt(this.route.snapshot.paramMap.get('id'));

      this.newCar = this.carsService.getCarById(id) || new Car();
    });

  }

  public generateYearList(from, to){
    let years:number[] = [];
    for (var i = from; i < to; i++) {
        years.push(i);
    }
    return years;
  }

  public addCar(){
    this.carsService.addCar(this.newCar);
    this.newCar = new Car();
    this.router.navigate(['cars']);
  }

  public saveCar(){
    this.router.navigate(['cars']);
  }

  public togglePreview(){
    this.previewShow = !this.previewShow;
  }


}
