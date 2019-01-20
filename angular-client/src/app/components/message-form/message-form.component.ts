import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';
import { ChatterBotService } from '../../services/chatterbot.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  SERVER_URL: string;
  socket: any;

  @Input('message')
  public message: Message;

  @Input('messages')
  public messages: Message[];

  constructor(private chatterBotService: ChatterBotService ) {
    const messageComp = this;
    this.chatterBotService.getData().subscribe(event => {
      console.log(event);
      messageComp.messages.push(new Message(event['data'], 'assets/images/bot.png', new Date()));
      messageComp.message = new Message('', 'assets/images/user.png');
    });
  }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);
    this.chatterBotService.pushData(this.message);
  }
}
