import { Component, OnInit, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public zoom: number;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) {
    this.zoom = 8;
    this.latitude = 30.02091857422600000;
    this.longitude = 51.10401713620700000;
  }

  ngOnInit(): void {
  }

}
