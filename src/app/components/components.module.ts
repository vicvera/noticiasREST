import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularCommonsModule } from '../layout/angular-commons.module';



@NgModule({
  declarations: [
    NoticiaComponent,
    FooterComponent,
    MenuComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AngularCommonsModule
  ],
  exports: [
    NoticiaComponent,
    FooterComponent,
    MenuComponent,
    ToolbarComponent
  ]
})
export class ComponentsModule { }
