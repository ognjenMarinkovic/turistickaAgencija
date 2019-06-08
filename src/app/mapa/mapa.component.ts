import { Component, OnInit } from '@angular/core';
import { AgmInfoWindow } from '@agm/core';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  place: Place;
  places: Array<Place>;
  currentIW: AgmInfoWindow;
  previousIW: AgmInfoWindow;

  map = {
    lat: 44.4041616,
    lng: 22.0769941,
    zoom: 11
  }
  constructor() {
    this.loadPlaceList();

    this.currentIW = null;
    this.previousIW = null;
  }

  clickedMarker(latitude: number, longitude: number) {
    this.map.lat = latitude + 0.14;
    this.map.lng = longitude;
  }


  ngOnInit() {

  }


  mapClick() {
    if (this.previousIW) {
      this.previousIW.close();
    }
  }
  markerClick(infoWindow) {
    if (this.previousIW) {
      this.currentIW = infoWindow;
      this.previousIW.close();
    }
    this.previousIW = infoWindow;
  }
  loadPlaceList() {
    this.places = [
      new Place("Rajkova pecina",
        "Majdanpek",
        "Rajkovu pećinu otkrio je krajem XIX veka naš poznati geograf Jovan Cvijić. Prema onome što je do sada poznato,hodnici Rajkove pećine dugački su preko dva kilometra i podeljeni u rečni i suvi horizont. Betonska staza vodi kroz prostranu Koncertnu i Ježevu dvoranu, pored Malih i Velikih orgulja, Obešenog hajduk Rajka do Dvorane kada. Zatim su tu i Žrtvenik, Duhovi, Dvorana vodopada, Sala stećaka, Zimska bajka i Kristalna dvorana.",
        44.4414325,
        21.9529974,
        "././assets/img/Rajkova-pecina/1.jpg",
        "https://www.google.com/maps/place/%D0%A0%D0%B0%D1%98%D0%BA%D0%BE%D0%B2%D0%B0+%D0%BF%D0%B5%D1%9B%D0%B8%D0%BD%D0%B0/@44.4294933,21.9292689,14z/data=!4m5!3m4!1s0x47516f327533d39d:0xa001196a77495ff9!8m2!3d44.4413791!4d21.9531298"
      ),
      new Place("Djerdap",
        "Negotin",
        "Nacionalni park Đerdap nalazi se na desnoj obali Dunava i prostire od Golubačke tvrđave do antičkog utvrđenja Diana u dužini od 100km. Površina nacionalnog parka je 636 km2što ga čini najvećim nacionalnim parkom u Srbiji, a po prirodnoj i kulturnoj baštini značajan je u evropskim razmerama.",
        44.5431576,
        21.9795766,
        "././assets/img/Nacionalni-park-Djerdap/1.JPG",
        "https://www.google.com/maps/place/%D0%A0%D0%B0%D1%98%D0%BA%D0%BE%D0%B2%D0%B0+%D0%BF%D0%B5%D1%9B%D0%B8%D0%BD%D0%B0/@44.4294933,21.9292689,14z/data=!4m5!3m4!1s0x47516f327533d39d:0xa001196a77495ff9!8m2!3d44.4413791!4d21.9531298"
      ),
      new Place("Valja Prerast",
        "Rudna glava",
        "Valja Prerast, prirodni kameni most pod zaštitom države, predstavlja spomenik prirode od izuzetnog značaja. Zaštićena prerast nalazi se oko 12 km od Majdanpeka.Od regionalnog puta pešačka staza je dugačka 1300m.Impozantna visina prerasti do gornje ivice luka iznosi 44,8m što je čini najvišom u Srbiji a širina njenog otvora pri dnu u visini rečnog korita je 9,7 m. Zaštićeni prostor prerasti obuhvata i prelepu istoimenu planinsku reku, koja ispod nje prolazi. Zajedno čine atraktivan i veoma značajan turistički ambijentalni prostor.",
        44.3621088,
        21.9894912,
        "././assets/img/Valja-prerast/1.jpg",
        "https://www.google.com/maps/place/%D0%A0%D0%B0%D1%98%D0%BA%D0%BE%D0%B2%D0%B0+%D0%BF%D0%B5%D1%9B%D0%B8%D0%BD%D0%B0/@44.4294933,21.9292689,14z/data=!4m5!3m4!1s0x47516f327533d39d:0xa001196a77495ff9!8m2!3d44.4413791!4d21.9531298"
      ),
      new Place("Lepenski vir",
        "Donjeg Milanovca",
        "Aheološko nalazište Lepenski vir je otkriveno 1965. godine, na samoj obali Dunava, i udaljeno je 15 km od Donjeg Milanovca. To je bilo jedno od najznačajnijih otkrića ove vrste na teritoriji Srbije. Kultura Lepenskog Vira je stara oko 8000 godina i predstavljala je potpunu nepoznanicu za arheologe, a nazvana je po lokaciji na kojoj je otkrivena.",
        44.5564639,
        22.0243296,
        "././assets/img/Lepenski-vir/1.JPG",
        "https://www.google.com/maps/place/Lepenski+vir/@44.5564601,22.0243349,17z")
    ]
  }

}
export class Place {
  name: string;
  location: string;
  description: string;
  latitude: number;
  longitude: number;
  url: string;
  link: string;

  constructor(
    name: string,
    location: string,
    description: string,
    latitude: number,
    longitude: number,
    url: string,
    link: string
  ) {
    this.name = name,
    this.location = location,
    this.description = description,
    this.latitude = latitude,
    this.longitude = longitude,
    this.url = url,
    this.link = link
  }



}
