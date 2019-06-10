import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaMarkerComponent } from './mapa-marker.component';

describe('MapaMarkerComponent', () => {
  let component: MapaMarkerComponent;
  let fixture: ComponentFixture<MapaMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
