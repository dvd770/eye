import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Chat } from '../chat/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: Http) { }

  getChat()//:Chat 
  {
    return this.http.get(this.url)
  }

  createMessage(msg)//:Msg 
  {
    return this.http.post(this.url, JSON.stringify(msg));
  }
}
