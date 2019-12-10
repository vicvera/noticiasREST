import { Component, OnInit } from '@angular/core';
import { NoticiasTweets } from 'src/app/models/noticia.model';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'prueba';
  noticiasTweets: NoticiasTweets;

// tslint:disable-next-line:variable-name
constructor(public _noticiasService: NoticiaService) {
  this.noticiasTweets = null;
}


ngOnInit(): void {
  this._noticiasService.getTweetsNotarios().subscribe((res) => {
    console.log(res);
    this.noticiasTweets = res;
    this.noticiasTweets.tweets.forEach(element => {
      console.log(element);
    });
  });
}

touchParent(id) {
  console.log('Componente padre ' + id);
  console.log('Tweet ID ' + id);

}

}
