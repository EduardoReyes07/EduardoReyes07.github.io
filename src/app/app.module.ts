import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

/* components*/
import { AppComponent } from './components/app/app.component';
import {HeaderComponent} from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { OpcionesCanchaComponent } from './components/opciones-cancha/opciones-cancha.component';
import { ImagenesinicioComponent } from './components/imagenesinicio/imagenesinicio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    OpcionesCanchaComponent,
    ImagenesinicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
