import { Component, OnInit } from '@angular/core';
import {HillwalkingService} from '../Services/hillwalking.service'

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  hikingSpots:any = [];
  constructor(private hillwalking: HillwalkingService) { }

  //calling from Services
  ngOnInit() {
    this.hillwalking.GetHikingData().subscribe( (data)=>{
      this.hikingSpots = data.places;
      console.log(this.hikingSpots);
    });
  }

}
