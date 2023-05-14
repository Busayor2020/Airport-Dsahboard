import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  // Your component logic here
}


// flight.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private flights = [
    { id: 1, airport: 'JFK', departure: '10:00', arrival: '12:00' },
    { id: 2, airport: 'LAX', departure: '14:00', arrival: '16:00' },
    // ...
  ];

  constructor(private http: HttpClient) { }

  // Simulate a login request
  login(username: string, password: string) {
    // Replace this with a real authentication API call
    return this.http.get('https://api.example.com/authenticate?username=' + username + '&password=' + password);
  }

  // Get all flights
  getAllFlights() {
    return this.flights;
  }
}