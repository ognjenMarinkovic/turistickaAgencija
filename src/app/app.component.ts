import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { routerTransition } from './routing.animation';

@Component({
  selector: 'app-root',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {

  }
  records = []
  getState(outlet) {
    return outlet.activatedRouteData.state
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#2C5F2DFF';
  }
}
