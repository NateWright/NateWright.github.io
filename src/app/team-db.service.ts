import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from './shared/team.model';

interface TeamJSON {
  team: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class TeamDbService {
  public teams: Team[] = [];
  teamsChanged = new Subject<void>();
  constructor(private http: HttpClient) {
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

  async initiateTeamsDb(teams: string[]) {
    this.teams = Array<Team>(16);
    let promises = []
    for (let i = 0; i < this.teams.length; i++) {
      promises.push(lastValueFrom(this.http.get<TeamJSON>(environment.dbURL + 'teams/' + teams[i] + '.json'))
        .catch(
          () => {
            return { team: teams[i], url: 'teamLogos/rocket-league.png' }
          }
        )
      )
    }
    const result = await Promise.all(promises)
    for (let i = 0; i < this.teams.length; i++) {
      const t = result[i]

      this.teams[i] = new Team(t.team, i, t.url)
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
