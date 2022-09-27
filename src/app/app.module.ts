import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SwissToSingleComponent } from './swiss-to-single/swiss-to-single.component';
import { SwissStageComponent } from './swiss-to-single/swiss-stage/swiss-stage.component';
import { SwissTeamComponent } from './swiss-to-single/swiss-stage/swiss-team/swiss-team.component';
import { SwissOpponentComponent } from './swiss-to-single/swiss-stage/swiss-opponent/swiss-opponent.component';
import { InputPageComponent } from './input-page/input-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SwissToSingleComponent,
    SwissStageComponent,
    SwissTeamComponent,
    SwissOpponentComponent,
    InputPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
