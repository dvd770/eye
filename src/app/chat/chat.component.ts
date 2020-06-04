import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Chat } from './chat'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  chat: any[] = [];
  name: string = 'זמני';
  scrollContainer: any;

  @ViewChild('scrollDown', { static: true }) scrollDown: ElementRef;
  @ViewChildren('chat') itemElements: QueryList<any>;



  constructor(private service: ChatService) { }

  ngOnInit() {
    this.service.getChat()
      .subscribe(response => {
        this.chat = response.json();
      });

  };

  ngAfterViewInit() {
    this.scrollContainer = this.scrollDown.nativeElement;
    this.itemElements.changes.subscribe(_ => this.scrollToBottom());
  }



  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      behavior: 'smooth'
    });
  }

  createMessage(message: { value: string; }) {
    let msg = { msg: message.value };
    message.value = '';

    this.service.createMessage(msg)
      .subscribe(response => {
        msg['id'] = response.json().id;
        this.chat.push(msg);
      })
  };




  /*  get chatSorted(){
      return this.chat$.sort((a, b) => new Date(b.CREATE_TS).getTime() -
      new Date(a.CREATE_TS).getTime()); 
      };
 */
}


