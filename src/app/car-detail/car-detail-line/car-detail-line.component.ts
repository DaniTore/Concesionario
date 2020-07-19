import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-detail-line',
  templateUrl: './car-detail-line.component.html',
  styleUrls: ['./car-detail-line.component.scss']
})
export class CarDetailLineComponent implements OnInit {

  @Input() title: string;
  @Input() data: string;


  constructor() { }

  ngOnInit(): void {
  }

}
