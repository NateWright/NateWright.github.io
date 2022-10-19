import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Team } from './shared/team.model';

interface TEAMDB {
  team: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class TeamDbService {
  private allTeams: TEAMDB[] = []
  public teams: Team[];
  teamsChanged = new Subject<void>();
  constructor(private http: HttpClient) {
    this.teams = [];

    this.http.get<TEAMDB[]>("https://raw.githubusercontent.com/NateWright/RocketLeagueWebsiteAssets/dev/brackets/RLCS2022-2023/teams.json").subscribe(
      (teams) => {
        this.allTeams = teams
        this.teamsChanged.next();
      }
    )
  }

  initiateTeams(text: string) {
    this.teams = []
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

  initiateTeamsDb(teams: string[]) {
    this.teams = []
    for (let i = 0; i < teams.length; i++) {
      let teamName = teams[i].replace('-', ' ')
      let t = this.allTeams.find((value) => {
        if (teamName == value.team) {
          return value;
        }
        return undefined
      })
      this.teams.push(new Team(t?.team, i, t?.url))
    }
  }

  getTeams() {
    return this.teams;
  }

  getTeam(index: number) {
    return this.teams[index];
  }
}
