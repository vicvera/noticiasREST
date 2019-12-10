import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NombreComponent } from './pages/nombre/nombre.component';
import {HttpClientModule} from '@angular/common/http';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { AngularCommonsModule } from './layout/angular-commons.module';

@NgModule({
  declarations: [
    AppComponent,
    NombreComponent
  ],
  imports: [
    AngularCommonsModule,
    HttpClientModule,
    ComponentsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
