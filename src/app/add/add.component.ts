import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class addDeviceComponent {

  constructor(private router: Router, private service: DeviceService) { }



}