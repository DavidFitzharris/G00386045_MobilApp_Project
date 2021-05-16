import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HillwalkingService {

  constructor(private http:HttpClient) { }
  
  //From RapidAPI, getting data of trails
  GetHikingData():Observable<any>{

  return this.http.get('https://trailapi-trailapi.p.rapidapi.com/?rapidapi-key=0ca57bc78dmshf1d960e843b062dp13e0e2jsn09c7bf50761e');
}
}
