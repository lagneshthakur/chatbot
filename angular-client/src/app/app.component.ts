import { Component } from '@angular/core';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public message: Message;
  public messages: Message[];


  constructor() {
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Hi! I am here to help', 'assets/images/bot.png', new Date())
    ];
  }
}
