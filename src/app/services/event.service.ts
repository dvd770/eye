import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventList } from './event';

@Injectable()
export class EventService {
  url = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  getEventsList(): Observable<EventList[]> {
    return this.http.get<EventList[]>(this.url);
  };

  getEventsNum(): Observable<EventList[]> {
    return this.http.get<EventList[]>(this.url)
  };

  eyeIconClick(): Observable<boolean> {
    return this.http.patch<boolean>(this.url + '/' + this.url['id'],
      JSON.stringify({ completed: true }));
  }

}