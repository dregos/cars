
import { Component, OnInit } from '@angular/core';
//import { CarsService } from '../../shared/services/cars.service';

//id, mark, model, year, maxSpeed, isAutomatic, engine, numberOfDoors
export class Car {
  public id : number;
  public mark : string;
  public  model: string;
  public year : number;
  public maxSpeed: number;
  public isAutomatic: boolean;
  public engine: string;
  public numberOfDoors:string;


  //private carsService : CarsService;

  constructor(id, mark, model, year, maxSpeed, isAutomatic, engine, numberOfDoors) {
    this.id = id;
    this.mark = mark;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.isAutomatic = isAutomatic;
    this.engine = engine;
    this.numberOfDoors = numberOfDoors;
  }



}
