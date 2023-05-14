import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenskyService {
  private readonly API_URL = 'https://opensky-network.org/api/states/all';

  constructor(private http: HttpClient) { }

  getFlights(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
}
