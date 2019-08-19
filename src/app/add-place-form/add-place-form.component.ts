import { Component, OnInit, EventEmitter, Output, forwardRef, Input} from '@angular/core';
import { PlaceService } from '../services/place.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-place-form',
  templateUrl: './add-place-form.component.html',
  styleUrls: ['./add-place-form.component.scss']})
export class AddPlaceFormComponent implements OnInit {
  
  @Input() placeDetails = {
  id: '',
  name: '',
  location: '',
  lat: 0,
  lng: 0,
  url: '',
  link: ''
  }

  constructor(
    public placeService: PlaceService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addPlace(dataPlace) {
    this.placeService.createPlace(this.placeDetails).subscribe((data: {}) => {
      this.router.navigate(['/listplaces'])
    })
  }


  log(x){
    console.log(x);
  }
}
