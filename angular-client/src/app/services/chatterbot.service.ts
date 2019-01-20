import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ChatterBotService {
  SERVER_URL: string;
  socket: any;
  observable: Observable<string>;
  constructor(private http: Http) {
    this.SERVER_URL = 'ws://localhost:9000';
    this.socket = new WebSocket(this.SERVER_URL);
  }

  getData(): Observable<string> {
    return  this.observable = new Observable((observer) => {
      this.socket.addEventListener('message', (data) => observer.next(data));
    });
  }
  pushData(message) {
    this.socket.send(message.content);
  }
}
