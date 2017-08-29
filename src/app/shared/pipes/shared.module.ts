import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsService } from '../services/cars.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers:[
    CarsService
  ],
  exports: [
  	
  ]
})
export class SharedModule { }
