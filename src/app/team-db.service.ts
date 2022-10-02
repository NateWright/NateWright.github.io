import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Team } from './shared/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamDbService {
  public teams: Team[];
  teamsChanged = new Subject<void>();
  constructor() {
    this.teams = [];
  }

  addTeams(text: string) {
    let csvToRowArray = text.split("\n");
    for (let index = 0; index < csvToRowArray.length; index++) {
      let row = csvToRowArray[index].split(",");
      this.teams.push(new Team(row[1], index + 1, row[0]));
    }
    let i = 1
    while (this.teams.length < 16) {
      this.teams.push(new Team("Test " + i, this.teams.length + 1, "assets/test-image.jpg"))
      i++;
    }
    this.teamsChanged.next();
  }

  getTeams() {
    return this.teams;
  }

  getTeam(index: number) {
    return this.teams[index];
  }
}
