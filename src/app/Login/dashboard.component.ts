import { Component, Injectable, OnInit } from '@angular/core';
import { OpenskyService } from './opensky.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  flights: any[] = [];

  constructor(@Inject(OpenskyService) private openskyService: OpenskyService) { }

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(): void {
    this.openskyService.getFlights().subscribe((data: any) => {
      this.flights = data.states;
    });
  }
}
function Inject(OpenskyService: any): (target: typeof DashboardComponent, propertyKey: undefined, parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

