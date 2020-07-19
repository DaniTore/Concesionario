import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../models/car'; // importa interface Car

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  @Input() car: Car; // entra y usa variable car

  @Output() emitStock = new EventEmitter<number>(false);

  constructor() { }

  ngOnInit(): void {

  }

  emitStockFunc(value: number): void{
    console.log(`Emito stock coche: ${this.car.brand} ${this.car.model} ${this.car.stock}`);
    this.emitStock.emit(value);
  }


  // tslint:disable-next-line: typedef
  borderColor(carBrand): string {
    let res = '';
    switch (carBrand){
      case 'Nissan':
        res = 'red';
        break;
      case 'Seat':
        res = 'blue';
        break;
      case 'Toyota':
        res = 'green';
        break;
    }
    return res;
  }

  aumentarStock(): void{
    this.car.stock += 1;
    this.emitStockFunc(1);
  }

  restarStock(): void{
    this.car.stock > 0 ? this.car.stock-- : this.car.stock = 0;
    this.emitStockFunc(-1);
  }
}
