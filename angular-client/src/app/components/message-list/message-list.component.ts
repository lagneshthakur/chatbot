import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit  {
  @ViewChild('chatList') private chatList: ElementRef;

  @Input('messages')
  public messages: Message[];

  constructor() { }

  ngOnInit() {
  }

  scrollToBottom() {
    this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
  }

}
