import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
<<<<<<< HEAD
export class Tab1Page  {
lat:any;
long:any;
  
  constructor(private geolocation: Geolocation) {}
  
  getLocation(){

    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.long = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
=======
export class Tab1Page implements OnInit {
  map: GoogleMap;
  constructor(private platform:Platform) {}


  async ngOnInit(){
    await this.platform.ready();
    await this.loadMap;
  }

  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'API_KEY_HERE',
      'API_KEY_FOR_BROWSER_DEBUG': 'API_KEY_HERE'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
>>>>>>> f41aefd4603cb89811b77c57777990581bbab783
  }

}
