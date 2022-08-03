import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  url="https://reqres.in/api/users"
  constructor(private api:HttpClient) { }

  getUser(){
    return this.api.get(`${this.url}?page=1`)
  }

  getUserById(id:String){
    return this.api.get(`${this.url}/${id}`)
  }
}
