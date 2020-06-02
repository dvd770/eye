import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventList } from './event';
import { faEye as faEye, faEyeSlash as faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Todos } from './todos';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  img = 'https://via.placeholder.com/150/92c952';
  todos: Todos;
  val = 10;
  eventType = 'סוג אירוע';
  events: EventList;
  faEye = faEye;
  eye: any;



  constructor(private service: EventService) { }

  ngOnInit() {
    this.service.getEventsList()
      .subscribe(response => {
        this.events = response.json();
      });

    this.service.getTodosList()
      .subscribe(response => {
        this.todos = response.json();

      });


  }

  onClickMinus() {
    this.val -= 1;
  }

  onClickPlos() {
    this.val += 1;
  }

  onClickIcon() {
    this.faEye = faEyeSlash;
    this.service.eyeIconClick(this.todos.id)
      .subscribe(response => {
        this.eye = response.json().id
        console.log(this.eye.id)
      })
  }
}