import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { addDeviceComponent } from './add/add.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NatFundComponent } from './nat-fund/nat-fund.component';
import { ListOfDevicesComponent } from './list-of-devices/list-of-devices.component';
import { EventsComponent } from './list-of-devices/events/events.component';
import { DeviceService } from './services/device.service';
import { EventService } from './services/event.service';
import { ChatComponent } from './chat/chat.component';
import { ArchiveComponent } from './archive/archive.component';
import { ExComponent } from './ex/ex.component';




@NgModule({
  imports: [FontAwesomeModule, HttpModule,
    HttpClientModule, BrowserModule, FormsModule, RouterModule.forRoot([
      {
        path: '',
        component: ListOfDevicesComponent
      },
      {
        path: 'events-log',
        component: EventsComponent
      },
      {
        path: 'addDevice',
        component: addDeviceComponent
      },
      {
        path: 'log-in',
        component: LogInComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'archive',
        component: ArchiveComponent
      },
      {
        path: 'ex',
        component: ExComponent
      },
      {
        path: '**',
        component: NatFundComponent
      }
    ])],
  declarations: [AppComponent, LogInComponent, addDeviceComponent,
    RegistrationComponent, NavbarComponent, NatFundComponent, ListOfDevicesComponent,
    EventsComponent, ChatComponent, ArchiveComponent, ExComponent],
  bootstrap: [AppComponent],
  providers: [DeviceService, EventService]
})
export class AppModule { }
