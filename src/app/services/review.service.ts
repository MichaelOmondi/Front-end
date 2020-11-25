import { Injectable } from '@angular/core';
import{HttpClient} from 'angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  url = '';
  constructor(private http:Httpclient) { }

get user(){

  return this.http.get(this.url);

}

}
