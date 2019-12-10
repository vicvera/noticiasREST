import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  @Input() id;
  @Input() fullText: string;
  @Input() created: string;
  @Input() imagen: string;

  @Output() openTweet: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  touchChild() {
    console.log('Componente hijo ' + this.id);
    this.openTweet.emit(this.id);
  }

}
