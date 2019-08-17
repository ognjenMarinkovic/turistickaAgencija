import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../services/place.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-place-update',
  templateUrl: './place-update.component.html',
  styleUrls: ['./place-update.component.scss']
})
export class PlaceUpdateComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  placeData: any = {};

  constructor(
    public placeService: PlaceService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.placeService.getPlace(this.id).subscribe((data: {}) => {
      this.placeData = data;
    })
  }

  // Update employee data
  updatePlace() {
    if(window.confirm('Are you sure, you want to update?')){
      this.placeService.updatePlace(this.id, this.placeData).subscribe(data => {
        this.router.navigate(['/listplaces'])
      })
    }
  }

}
