import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: Http) { }

  getChat() {
    return this.http.get(this.url)
  }

  createMassage(msg)//: string 
  {
    return this.http.post(this.url, JSON.stringify(msg));
  }
}
