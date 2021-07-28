import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor( private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=03161d625c1042a6a0c3b09584992500";
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=03161d625c1042a6a0c3b09584992500";
  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=03161d625c1042a6a0c3b09584992500";


  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsApiUrl);
  }
}
