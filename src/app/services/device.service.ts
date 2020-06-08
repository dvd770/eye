import { Injectable } from '@angular/core';
import { Device } from '../list-of-devices/device';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DeviceService {

  url = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  getDeviceList(): Observable<Device[]> {
    return this.http.get<Device[]>
      (this.url)
  };

};