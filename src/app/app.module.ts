import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InputPageComponent } from './input-page/input-page.component';
import { RegionalCardComponent } from './input-page/regional-card/regional-card.component';
import { CreateBracketComponent } from './create-bracket/create-bracket.component';
import { SharedModule } from './shared/shared.module';
import { ByobComponent } from './byob/byob.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InputPageComponent,
    RegionalCardComponent,
    CreateBracketComponent,
    ByobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
