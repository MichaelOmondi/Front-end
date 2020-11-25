import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://mavens2020.herokuapp.com/api/categories';
const newUrl = 'https://mavens2020.herokuapp.com/api/categories/cat-id';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public getCats(): Observable<any> {
    return this.http.get(baseUrl);
  }

  newCat(data): Observable<any> {
    return this.http.post(baseUrl,data);
  }

  getCat(id): Observable<any> {
    return this.http.get(`${newUrl}/${id}`);
  }

}




