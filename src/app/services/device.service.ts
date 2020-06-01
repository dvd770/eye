import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class DeviceService {
    url="https://jsonplaceholder.typicode.com/users"

   constructor(private http: Http) {}
    
    getDeviceList(){
      return this.http.get(this.url);
    };

   };