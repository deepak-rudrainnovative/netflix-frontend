import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  apiUrl:string=environment.api_url;
  constructor(private http:HttpClient) { }

  getAllVideosList(){
    return this.http.get(this.apiUrl+'/video/videos/all',{observe:'response'})
  }
}
