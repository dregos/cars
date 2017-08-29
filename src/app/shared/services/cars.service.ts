import { Injectable } from '@angular/core';
import { carsList, engineTypes } from '../../components/cars/cars-src';
import { Car } from '../../shared/models/car.model';

@Injectable()
export class CarsService {

  private cars : Car[] = [];

  constructor() {
    this.cars = this.getCarsList();
  }

  public getCars(){
    return this.cars;
  }

  public getEngineTypes(){
    return engineTypes;
  }

  public getCarsList(){
    let car:Car;
    let tmp:Car[] = [];
    let i:number;
    for(i=0; i < carsList.length; i++){
      car = new Car(carsList[i].id, carsList[i].mark, carsList[i].model, carsList[i].year, carsList[i].maxSpeed, carsList[i].isAutomatic, carsList[i].engine, carsList[i].numberOfDoors)
      tmp.push(car);
    }
    return tmp;
  }

  public addCar(newCar: Car){
    //console.log(newCar);
    let lastCar = this.cars.length;
    newCar.id = this.cars[lastCar-1].id + 1;
    this.cars.push(newCar);
    //console.log(this.cars);
  }

  public removeCar(car:Car){
    const index = this.cars.indexOf(car);
    this.cars.splice(index,1);
  }

}
