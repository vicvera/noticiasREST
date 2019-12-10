import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NoticiasTweets } from '../models/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(public httpClient: HttpClient) { }

  getTweetsNotarios() {
    return this.httpClient.get<NoticiasTweets>('https://us-central1-app-nota.cloudfunctions.net/notarios/api/v1/twitter/cnotariosedomex');
  }
}
