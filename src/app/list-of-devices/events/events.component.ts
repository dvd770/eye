import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventList } from '../../services/event';
import { faEye as faEye, faEyeSlash as faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  img = 'https://via.placeholder.com/150/92c952';
  val = 10;
  eventType = 'סוג אירוע';
  events: EventList[];
  faEye = faEye;
  eye: boolean;
  allowed = true

  constructor(private service: EventService) { }

  ngOnInit() {
    this.service.getEventsList()
      .subscribe(response => {
        this.events = response;
      });
  }

  onClickIcon() {
    this.faEye = faEyeSlash;
    this.service.eyeIconClick()
      .subscribe(response => {
        this.eye = response
        console.log(this.eye)
      })
  }

  onClickMinus() {
    this.val -= 1;
  }

  onClickPlos() {
    this.val += 1;
  }

}