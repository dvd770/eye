import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Chat } from './chat'


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chat$: any[] = [];
  

  constructor(private service: ChatService) { }

  ngOnInit(){
    this.service.getChat()
        .subscribe(response => {
          this.chat$ = response.json();
        });     
    };

createMassage(input: HTMLInputElement){
  let msg = {massage: input.value};
//  let name = {user.name};
  input.value = '';

  this.service.createMassage(msg)
    .subscribe(response => {
      msg['id'] = response.json().id;
      this.chat$.push(msg);
    //  this.chat.push(name);
      })
  };

/*  get chatSorted(){
    return this.chat$.sort((a, b) => new Date(b.CREATE_TS).getTime() -
    new Date(a.CREATE_TS).getTime()); 
    };
    */
}


