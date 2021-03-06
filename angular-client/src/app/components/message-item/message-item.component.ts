import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input('message')
  public message: Message;

  constructor() { }

  ngOnInit() {
  }

}