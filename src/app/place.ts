export class Place {

    name: string = '';
    location: string = '';
    description: string = '';
    latitude: number;
    longitude: number;
    url: string = '';
    link: string = '';
  
  
    constructor(name: string, location: string, description: string, latitude: number, longitude: number, url: string, link: string) {
  
      this.name = name,
        this.location = location,
        this.description = description,
        this.latitude = latitude,
        this.longitude = longitude,
        this.url = url,
        this.link = link
    }
}
