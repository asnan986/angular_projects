import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpringbookService {

  constructor(private http:HttpClient) { }

  getSpringBooks(){
    return this.http.get('http://localhost:8080/getbooks');
  }
}
