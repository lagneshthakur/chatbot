import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ChatterBotService {

  private baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
  private configUrl = 'assets/config.json';
  constructor(private http: Http) {}

  public getResponse(query: string) {
    const data = {
      query : query,
      lang: 'en',
    };
    return this.http.get(this.configUrl);
  }
}
