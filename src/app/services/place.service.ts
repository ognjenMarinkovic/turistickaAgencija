import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Place } from '../models/place';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  placeUrl: string = 'http://localhost:3000/places';

  constructor(private http:HttpClient) { }

  getPlaces():Observable<Place[]>{
    return this.http.get<Place[]>(this.placeUrl);
  }
}
