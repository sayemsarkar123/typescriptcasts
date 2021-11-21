export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class Map {
  private map: google.maps.Map;
  constructor(mapDiv: string, mapOptions: google.maps.MapOptions) {
    this.map = new google.maps.Map(document.getElementById(mapDiv), mapOptions);
  }
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: mappable.location,
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.map, marker);
    });
  }
}
