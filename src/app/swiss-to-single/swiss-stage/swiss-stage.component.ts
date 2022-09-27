import { Component, OnInit, ViewChild } from '@angular/core';
import { Team } from 'src/app/shared/team.model';
import { Opponent } from 'src/app/shared/opponent.model';
import { SwissTeam } from './swiss-team.model';
import { TeamDbService } from 'src/app/team-db.service';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-swiss-stage',
  templateUrl: './swiss-stage.component.html',
  styleUrls: ['./swiss-stage.component.scss']
})
export class SwissStageComponent implements OnInit {
  // teams: SwissTeam[] = [];
  // displayedColumns: string[] = ['seed', 'teamName', 'Round 1']
  displayedColumns: string[] = ['seed', 'teamName', 'Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5']
  teams: SwissTeamData;
  teamsChanged: Subscription;

  constructor(private teamServer: TeamDbService) {
    this.teams = new SwissTeamData();
    this.teamsChanged = this.teamServer.teamsChanged.subscribe(() => {
      this.createSwissBracket(teamServer.teams);
    })
  }

  ngOnInit(): void {
    this.createSwissBracket(this.teamServer.teams);
  }

  createSwissBracket(teams: Team[]) {
    var swissTeams: SwissTeam[] = [];

    console.log("test");
    for (var t of teams) {
      swissTeams.push(new SwissTeam(t));
    }
    for (var i = 0; i < swissTeams.length; i++) {
      swissTeams[i].opponents.push(new Opponent(teams[swissTeams.length - 1 - i].seed));
    }
    this.teams.setData(swissTeams);
  }

}

class SwissTeamData extends DataSource<SwissTeam> {
  private _teams = new ReplaySubject<SwissTeam[]>();

  constructor() {
    super();
  }

  connect(): Observable<SwissTeam[]> {
    return this._teams;
  }

  disconnect() { }

  setData(data: SwissTeam[]) {
    this._teams.next(data);
  }
}
