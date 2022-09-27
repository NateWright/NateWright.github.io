import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Team } from './shared/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamDbService {
  public teams: Team[] = [];
  teamsChanged = new Subject<void>();
  constructor() { }

  addTeams(text: string) {
    let csvToRowArray = text.split("\n");
    for (let index = 0; index < csvToRowArray.length; index++) {
      let row = csvToRowArray[index].split(",");
      this.teams.push(new Team(row[1], index + 1, row[0]));
      // this.userArray.push(new User(parseInt(row[0], 10), row[1], row[2].trim()));
    }
    this.teamsChanged.next();
  }
  getTeam(seed: number) {
    for (let t of this.teams) {
      if (seed === t.seed) {
        return t;
      }
    }
    return undefined;
  }
}
