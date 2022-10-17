import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { TeamDbService } from '../team-db.service';
import { HttpClient } from '@angular/common/http'

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
  // csvForm: FormGroup;
  naEvents: Event[] = []
  euEvents: Event[] = [];
  constructor(private teamServer: TeamDbService, private http: HttpClient) {
    // this.csvForm = new FormGroup({
    //   csvText: new FormControl(textField)
    // });

    this.http
      .get<Event[]>("https://raw.githubusercontent.com/NateWright/RocketLeagueWebsiteAssets/master/brackets/RLCS2022-2023/naEvents.json")
      .subscribe((events: Event[]) => {
        this.naEvents = events;
      })
    this.http
      .get<Event[]>("https://raw.githubusercontent.com/NateWright/RocketLeagueWebsiteAssets/master/brackets/RLCS2022-2023/euEvents.json")
      .subscribe((events: Event[]) => {
        this.euEvents = events;
      })
  }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   let formText = this.csvForm.get('csvText');
  //   if (formText) {
  //     this.teamServer.addTeams(formText.value);
  //   }
  // }

  initiateTeams(file: string) {
    this.http.get(file, { responseType: 'text' })
      .subscribe((data) => {
        this.teamServer.addTeams(data);
      }
      );
  }

}
