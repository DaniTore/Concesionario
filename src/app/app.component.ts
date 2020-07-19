import { Component } from '@angular/core';
import { Car } from './models/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cars: Car[] = [];
  totalStock: number = null;

  constructor() {
    this.inicializarListaCoches();
  }

  inicializarListaCoches(): void{
    this.cars.push({
      model: '200sx',
      brand: 'Nissan',
      price: 12000,
      stock: 0,
      visible: true
    });

    this.cars.push({
      model: 'Ibiza2020',
      brand: 'Seat',
      price: 15000,
      stock: 0,
      visible: true
    });

    this.cars.push({
      model: 'Corola',
      brand: 'Toyota',
      price: 13500,
      stock: 0,
      visible: true
    });
  }

  mostrarOclultar(car: Car): void {
    car.visible = !car.visible;
  }

  sumaStockTotal(stock: number): void{
    console.log(stock);
    this.totalStock += stock;
    console.log('StockTotal', this.totalStock);
  }

}
