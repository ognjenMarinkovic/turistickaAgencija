import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Place } from '../models/place';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  placeUrl: string = 'http://localhost:3000/places';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  constructor(private http:HttpClient) { }

  getPlaces():Observable<Place>{
    return this.http.get<Place>(this.placeUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );;
  }
  
  getPlace(id): Observable<Place> {
    return this.http.get<Place>(this.placeUrl + "/" + id).pipe(
      retry(1),
      catchError(this.handleError)
    );;
  } 

  updatePlace(id, place): Observable<Place> {
    return this.http.put<Place>(this.placeUrl + '/' + id, place, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  createPlace(place): Observable<Place> {
    return this.http.post<Place>(this.placeUrl + '/', JSON.stringify(place), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  
  deletePlace(id){
    return this.http.delete<Place>(this.placeUrl+ "/" + id, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );;
  }

  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
} 
