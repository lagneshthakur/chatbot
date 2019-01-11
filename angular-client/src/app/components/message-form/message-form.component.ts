import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';
import { ChatterBotService } from '../../services/chatterbot.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  private message: Message;

  @Input('messages')
  private messages: Message[];

  constructor(private chatterBotService: ChatterBotService) {
  }

  ngOnInit(){
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);
    this.chatterBotService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(
        new Message(JSON.parse(res._body).message, 'assets/images/bot.png', JSON.parse(res._body).timestamp)
      );
    });

    this.message = new Message('', 'assets/images/user.png');
  }

}