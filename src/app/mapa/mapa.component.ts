import { Component, OnInit, Input } from '@angular/core';
import { AgmInfoWindow } from '@agm/core';
import { PlaceService } from '../services/place.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  places: any;
  currentIW: AgmInfoWindow;
  previousIW: AgmInfoWindow;
  
  
  map = {
    lat: 44.473671,
    lng: 21.9906629,
    zoom: 11,
  }
  
  constructor(
    private placeService: PlaceService
  ) {
    
  }

  
  clickedMarker(latitude: number, longitude: number) {
    this.map.lat = latitude+0.02;
    this.map.lng = longitude;
    this.map.zoom = 13;
  }


  ngOnInit() {
    this.currentIW = null;
    this.previousIW = null;
    this.placeService.getPlaces().subscribe(places => this.places = places);
  }


  mapClick() {
    if (this.previousIW) {
      this.previousIW.close();
    }
    
    this.map.zoom = 10;
  }
  markerClick(infoWindow) {
    if (this.previousIW) {
      this.currentIW = infoWindow;
      this.previousIW.close();
    }
    this.previousIW = infoWindow;
  }
 
}
