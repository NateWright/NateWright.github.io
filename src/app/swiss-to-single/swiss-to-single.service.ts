import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamDbService } from '../team-db.service';

export interface SwissTeam {
  teamIndex: number;
  swissMatchup: SwissMatchup[];
}

export interface SwissMatchup {
  team1: number;
  team2: number;
  team1Wins: number;
  team2Wins: number;
}

@Injectable({
  providedIn: 'root'
})
export class SwissToSingleService implements OnInit, OnDestroy {
  private teams: SwissTeam[] = [];
  private teamsChanged: Subscription;

  round1Matchups: SwissMatchup[] = new Array<SwissMatchup>(8);
  round2High: SwissMatchup[] = new Array<SwissMatchup>(4);
  round2Low: SwissMatchup[] = new Array<SwissMatchup>(4);
  round3High: SwissMatchup[] = new Array<SwissMatchup>(2);
  round3Mid: SwissMatchup[] = new Array<SwissMatchup>(4);
  round3Low: SwissMatchup[] = new Array<SwissMatchup>(2);
  round4High: SwissMatchup[] = new Array<SwissMatchup>(3);
  round4Low: SwissMatchup[] = new Array<SwissMatchup>(3);
  round5: SwissMatchup[] = new Array<SwissMatchup>(3);


  constructor(private teamsDb: TeamDbService) {
    this.teamsChanged = this.teamsDb.teamsChanged.subscribe(() => {
      this.initiateBracket();
    });
  }
  ngOnDestroy(): void {
    this.teamsChanged.unsubscribe();
  }
  ngOnInit(): void {
    this.initiateBracket();
  }

  getSwissTeams() {
    return this.teams.slice();
  }

  getRound1Matchups() {
    return this.round1Matchups.slice()
  }

  initiateBracket() {
    let teams = this.teamsDb.getTeams();
    teams.forEach((value, index) => {
      this.teams[index] = { teamIndex: index, swissMatchup: [] };
    })

    for (var i = 0; i < this.teams.length / 2; i++) {
      this.round1Matchups[i] = { team1: i, team2: this.teams.length - 1 - i, team1Wins: 0, team2Wins: 0 };
      this.teams[i].swissMatchup.push(this.round1Matchups[i]);
      this.teams[this.teams.length - 1 - i].swissMatchup.push(this.round1Matchups[i]);
    }
  }
  generateRound2() {
    let teams = this.teams.sort((a, b) => {
      return this.sortFunction(a, b);
    })
    let teamsHigh = teams.slice(0, teams.length / 2 - 1);
    let teamsLow = teams.slice(teams.length, teams.length - 1);
    for (var i = 0; i < teamsHigh.length / 2; i++) {
      this.round1Matchups.push({ team1: teamsHigh[i].teamIndex, team2: teamsHigh[teamsHigh.length - 1 - i].teamIndex, team1Wins: 0, team2Wins: 0 });
    }

    for (var i = 0; i < teamsLow.length / 2; i++) {
      this.round1Matchups.push({ team1: teamsLow[i].teamIndex, team2: teamsLow[teamsLow.length - 1 - i].teamIndex, team1Wins: 0, team2Wins: 0 });
    }
  }

  sortFunction(a: SwissTeam, b: SwissTeam): number {

    for (let i = 0; i < a.swissMatchup.length; i++) {
      let team1Dif = this.checkWinLoss(a.teamIndex, a.swissMatchup[i]);
      let team2Dif = this.checkWinLoss(b.teamIndex, b.swissMatchup[i]);

      if (team1Dif > 0 && team2Dif > 0) {
      } else if (team1Dif > 0) {
        return -1;
      }
      else if (team2Dif > 0) {
        return 1;
      }
      if (i === a.swissMatchup.length - 1 && team1Dif > team2Dif) {
        return -1;
      } else {
        return 1;
      }
    }
    return this.teamsDb.getTeam(a.teamIndex).seed - this.teamsDb.getTeam(b.teamIndex).seed;
  }

  checkWinLoss(index: number, match: SwissMatchup): number {
    return index === match.team1 ? match.team1Wins - match.team2Wins : match.team2Wins - match.team1Wins;
  }
}


