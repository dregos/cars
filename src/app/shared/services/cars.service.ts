import { Injectable } from '@angular/core';
import { cars } from '../../components/cars/cars-src';

@Injectable()
export class CarsService {



  constructor() { }

  public getCarsList(){
    //console.log("cars:");
    //console.log(cars);
    return cars;
  }

}
