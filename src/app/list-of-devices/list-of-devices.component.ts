import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { EventService } from '../services/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Device } from './device';


@Component({
  selector: 'app-list-of-devices',
  templateUrl: './list-of-devices.component.html',
  styleUrls: ['./list-of-devices.component.css']
})
export class ListOfDevicesComponent implements OnInit {
  devices: Device;
  eventNum: number;


  constructor(private service: DeviceService, private eventNumService: EventService,
    private router: Router, private route: ActivatedRoute) { }

  onClick() {
    this.router.navigate(['events-log'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.getDeviceList();
    this.getEventNumTs();
  };

  getDeviceList() {
    this.service.getDeviceList()
      .subscribe(response => {
        this.devices = response.json();
      });
  }

  getEventNumTs() {
    this.eventNumService.getEventsNum()
      .subscribe(response => {
        this.eventNum = response.json().length
      });
  }

}




