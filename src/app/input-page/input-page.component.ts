import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

export interface Event {
  regionalName: string,
  csvURL: string,
  format: string
}

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent implements OnInit {
  naEvents: Event[] = [];
  euEvents: Event[] = [];
  wcEvents: Event[] = [];
  constructor(private http: HttpClient) {

    this.http
      .get<Event[]>(environment.dbURL + "brackets/RLCS2022-2023/naEvents.json")
      .subscribe((events: Event[]) => {
        this.naEvents = events;
      })
    this.http
      .get<Event[]>(environment.dbURL + "brackets/RLCS2022-2023/euEvents.json")
      .subscribe((events: Event[]) => {
        this.euEvents = events;
      })
    this.http
      .get<Event[]>(environment.dbURL + "brackets/RLCS2022-2023/wcEvents.json")
      .subscribe((events: Event[]) => {
        this.wcEvents = events;
      })
  }

  ngOnInit(): void {
  }

}
