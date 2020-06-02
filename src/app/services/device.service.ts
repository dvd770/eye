import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Device } from '../list-of-devices/device';


@Injectable()
export class DeviceService {
  url = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: Http) { }

  getDeviceList()//:Device
  {
    return this.http.get(this.url);
  };

};