import { Component } from '@angular/core';
import { routerTransition } from './routing.animation';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  records = []
  getState(outlet) {
    return outlet.activatedRouteData.state
    }
}
