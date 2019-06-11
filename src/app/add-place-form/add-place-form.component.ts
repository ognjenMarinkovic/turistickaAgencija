import { Component, OnInit, EventEmitter, Output, forwardRef} from '@angular/core';
import { Place } from '../models/place'


@Component({
  selector: 'app-add-place-form',
  templateUrl: './add-place-form.component.html',
  styleUrls: ['./add-place-form.component.scss']})
export class AddPlaceFormComponent implements OnInit {
  @Output() addPlace: EventEmitter<any> = new EventEmitter();

  id: string;
  name: string;
  location: string;
  lat: number;
  lng: number;
  url: string;
  link: string;


  constructor(){

  }
  
  onSubmit(){
    const place = {
      id: this.id,
      name: this.name,
      location: this.location,
      latitude: this.lat,
      longitude: this.lng,
      url: this.url,
      link: this.link
    }
    this.addPlace.emit(place);
    
  }

  ngOnInit(){
    
  }

}
