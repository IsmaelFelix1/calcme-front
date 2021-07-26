import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calcme } from '../model/calcme';

@Injectable({
  providedIn: 'root'
})
export class CalcmeService {

  apiUrl = "http://localhost:8080/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  create(calcme: Calcme): Observable<Calcme> {
    return this.httpClient.post<Calcme>( this.apiUrl + "users", calcme);
  }
}
