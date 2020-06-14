import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Chat } from './chat'


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  chat: Chat[] = [];
  name: string = 'זמני';
  scrollContainer: HTMLElement;

  @ViewChild('scrollDown', { static: true }) scrollDown: ElementRef;
  @ViewChildren('chat') itemElements: QueryList<any>;

  constructor(private service: ChatService) { }

  ngOnInit() {
    this.service.getChat()
      .subscribe(response => {
        this.chat = response;
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

  createMessage(msg: { value: string; }): void {
    let message = { msg: msg.value };

    this.service.createMessage(message.msg)
      .subscribe(response => {
        message = response;
        this.chat.push(message);
        console.log(message)
      })
    msg.value = '';
    console.log(message)
  };




  /*  get chatSorted(){
      return this.chat$.sort((a, b) => new Date(b.CREATE_TS).getTime() -
      new Date(a.CREATE_TS).getTime()); 
      };
 */
}