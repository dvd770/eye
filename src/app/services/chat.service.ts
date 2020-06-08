import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from '../chat/chat';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getChat(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.url)
  }

  createMessage(msg: string): Observable<Message> {
    return this.http.post<Message>(this.url, JSON.stringify(msg));
  }
}
