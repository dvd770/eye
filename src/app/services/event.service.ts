import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class EventService {
   url="https://jsonplaceholder.typicode.com/users"
   todos = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: Http)
  {}

  getTodosList(){
    return this.http.get(this.todos); 
  };
  
  getEventsList(){
    return this.http.get(this.url); 
  };

  getEventsNum(){
    return this.http.get(this.url)
  };

  eyeIconClick(todos){
    return this.http.patch(this.todos + '/' + todos.id, 
      JSON.stringify({ completed: true}));
  }
                                
  
}