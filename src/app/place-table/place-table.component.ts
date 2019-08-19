import { Component, OnInit } from '@angular/core';
import { Place } from '../models/place';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-place-table',
  templateUrl: './place-table.component.html',
  styleUrls: ['./place-table.component.scss']
})
export class PlaceTableComponent implements OnInit {
  Place: any = [];
  places: Place[];
  

  constructor(public placeService: PlaceService) { }

  ngOnInit() {
    this.loadPlaces()
  }

  loadPlaces() {
    return this.placeService.getPlaces().subscribe((data: {}) => {
      this.Place = data;
    })
  }

  
  deletePlace(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.placeService.deletePlace(id).subscribe(data => {
        this.loadPlaces()
      })
    }  
  }
 
}
