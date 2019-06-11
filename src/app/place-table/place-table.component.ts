import { Component, OnInit } from '@angular/core';
import { Place } from '../models/place';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-place-table',
  templateUrl: './place-table.component.html',
  styleUrls: ['./place-table.component.scss']
})
export class PlaceTableComponent implements OnInit {
  places: Place[];
  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.placeService.getPlaces().subscribe(places => this.places = places);
  }

}
