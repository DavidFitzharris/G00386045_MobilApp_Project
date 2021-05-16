import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMap, GoogleMaps } from '@ionic-native/google-maps';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  {
getLat:number;
getLong:number;
map:any;
  
  constructor(private geolocation: Geolocation, private googleMaps: GoogleMaps) {}

  getLocation(){

    this.geolocation.getCurrentPosition().then((resp) => {
      this.getLat = resp.coords.latitude
      this.getLong = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: this.getLat,
          lng: this.getLong
        },
        zoom: 18,
        tilt: 30
      }
    });
  }

}
